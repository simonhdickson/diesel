initSidebarItems({"struct":[["MysqlConnection","A connection to a MySQL database. Connection URLs should be in the form `mysql://[user[:password]@]host/database_name`"],["PgConnection","The connection string expected by `PgConnection::establish` should be a PostgreSQL connection string, as documented at http://www.postgresql.org/docs/9.4/static/libpq-connect.html#LIBPQ-CONNSTRING"],["SqliteConnection",""]],"trait":[["BelongingToDsl",""],["BoxedDsl","Boxes the pieces of a query into a single type. This is useful for cases where you want to conditionally modify a query, but need the type to remain the same. The backend must be specified as part of this. It is not possible to box a query and have it be useable on multiple backends."],["CountDsl","Adds a simple `count` function to queries. Automatically implemented for all types which implement `SelectDsl`."],["DistinctDsl","Adds the `DISTINCT` keyword to a query."],["ExecuteDsl",""],["FilterDsl","Adds to the `WHERE` clause of a query. If there is already a `WHERE` clause, the result will be `old AND new`. This is automatically implemented for the various query builder types."],["FindDsl","Attempts to find a single record from the given table by primary key."],["FirstDsl",""],["ForUpdateDsl","Adds `FOR UPDATE` to the end of the select statement. This method is only available for MySQL and PostgreSQL. SQLite does not provide any form of row locking."],["GroupedBy","The `grouped_by` function groups records by their parent."],["Insertable","Represents that a structure can be used to insert a new row into the database. This is automatically implemented for `&[T]` and `&Vec<T>` for inserting more than one record."],["JoinDsl","Methods allowing various joins between two or more tables."],["JoinOnDsl",""],["JoinTo","Indicates that two tables can be used together in a JOIN clause. Implementations of this trait will be generated for you automatically by the association annotations from codegen."],["LimitDsl","Sets the limit clause of a query. If there was already a limit clause, it will be overridden. This is automatically implemented for the various query builder types."],["LoadDsl","Methods to execute a query given a connection. These are automatically implemented for the various query types."],["LoadQuery",""],["OffsetDsl","Sets the offset clause of a query. If there was already a offset clause, it will be overridden. This is automatically implemented for the various query builder types."],["OrderDsl","Sets the order clause of a query. If there was already a order clause, it will be overridden. The expression passed to `order` must actually be valid for the query. See also: `.desc()` and `.asc()`"],["SaveChangesDsl",""],["SelectDsl","Sets the select clause of a query. If there was already a select clause, it will be overridden. The expression passed to `select` must actually be valid for the query (only contains columns from the target table, doesn't mix aggregate + non-aggregate expressions, etc)."]]});