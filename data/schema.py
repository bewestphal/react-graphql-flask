import graphene
from graphene import relay, String
from graphene_sqlalchemy import SQLAlchemyConnectionField, SQLAlchemyObjectType, utils
from models import Employee as EmployeeModel
from database import db_session


class EmployeeType(SQLAlchemyObjectType):
    name = graphene.String(description='The name of the employee')

    class Meta:
        model = EmployeeModel
        interfaces = (relay.Node,)

class CreateEmployee(relay.ClientIDMutation):
    class Input:
        name = graphene.String()

    employee = graphene.Field(lambda: EmployeeType)

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        name = input.get('name')

        session = db_session()

        new_employee = EmployeeModel(
            name=name
        )
        session.add(new_employee)
        session.commit()
        session.close()

        return CreateEmployee(name=name)

class Query(graphene.ObjectType):
    all_employees = graphene.List(EmployeeType, description='Returns all employees')
    employee = graphene.Field(
        EmployeeType,
        name=graphene.String(),
        description='Just one employee belonging to an name',
    )

    def resolve_all_employees(self, args, context, info):
        return EmployeeType.objects.all()

    def resolve_employee(self, args, context, info):
        query = EmployeeType.get_query(context) # SQLAlchemy query
        for key, value  in args.iteritems():
            query = query.filter(getattr(EmployeeModel, key) == value)
        employee = query.first()
        return employee

class MyMutations(graphene.ObjectType):
    create_employee = CreateEmployee.Field()

schema = graphene.Schema(query=Query, types=[EmployeeType], mutation=MyMutations)