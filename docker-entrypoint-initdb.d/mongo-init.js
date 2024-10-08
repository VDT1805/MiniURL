
db.createUser(
    {
        user: "dockerusr",
        pwd: "dev123",
        roles: [
            {
                role: "root",
                db: "miniurl"
            }
        ]
    }
);

db.createCollection('urls');
