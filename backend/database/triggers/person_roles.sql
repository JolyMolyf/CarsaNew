DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_Person_roles') THEN
        CREATE TYPE public."enum_Person_roles" AS ENUM (
            'CLIENT',
            'SELECTOR',
            'TECHNICIAN',
            'MANAGER'
        );
    END IF;
END $$;

CREATE OR REPLACE FUNCTION add_role() RETURNS TRIGGER AS $$
    DECLARE
        role_name public."enum_Person_roles" := TG_ARGV[0]::public."enum_Person_roles";
    BEGIN
        UPDATE public."Person" AS person SET roles = array_append(roles, role_name)
        WHERE person.id = NEW.person_id
        AND NOT (role_name = ANY(COALESCE(person.roles, array[]::public."enum_Person_roles"[])));
        RETURN NEW;
    END
$$ LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION remove_role() RETURNS TRIGGER AS $$
    DECLARE
        role_name public."enum_Person_roles" := TG_ARGV[0]::public."enum_Person_roles";
    BEGIN
        UPDATE public."Person" AS person SET roles = array_remove(roles, role_name)
        WHERE person.id = OLD.person_id;
        RETURN NEW;
    END
$$ LANGUAGE PLPGSQL;


CREATE OR REPLACE TRIGGER t_add_client_role AFTER INSERT
ON public."Client"
FOR EACH ROW
EXECUTE PROCEDURE add_role('CLIENT');

CREATE OR REPLACE TRIGGER t_remove_client_role AFTER DELETE
ON public."Client"
FOR EACH ROW
EXECUTE PROCEDURE remove_role('CLIENT');


CREATE OR REPLACE TRIGGER t_add_selector_role AFTER INSERT
ON public."CarSelector"
FOR EACH ROW
EXECUTE PROCEDURE add_role('SELECTOR');

CREATE OR REPLACE TRIGGER t_remove_selector_role AFTER DELETE
ON public."CarSelector"
FOR EACH ROW
EXECUTE PROCEDURE remove_role('SELECTOR');


CREATE OR REPLACE TRIGGER t_add_technician_role AFTER INSERT
ON public."Technician"
FOR EACH ROW
EXECUTE PROCEDURE add_role('TECHNICIAN');

CREATE OR REPLACE TRIGGER t_remove_technician_role AFTER DELETE
ON public."Technician"
FOR EACH ROW
EXECUTE PROCEDURE remove_role('TECHNICIAN');


CREATE OR REPLACE TRIGGER t_add_manager_role AFTER INSERT
ON public."Manager"
FOR EACH ROW
EXECUTE PROCEDURE add_role('MANAGER');

CREATE OR REPLACE TRIGGER t_remove_manager_role AFTER DELETE
ON public."Manager"
FOR EACH ROW
EXECUTE PROCEDURE remove_role('MANAGER');