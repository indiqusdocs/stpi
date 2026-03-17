---
sidebar_position: 12
---
# App Overlays

The following sections list the instructions to verify/login into DB applications:
- [MongoDB](#mongodb)
- [MySQL](#mysql)
- [PostgreSQL](#postgresql)
- [Redis](#redis)
- [Cassandra](#cassandra)
- [Elasticsearch](#elasticsearch)
## MongoDB

 To set up and Log into MongoDB, follow these steps:

1. Type `mongosh` in the command line or terminal and press **Enter** to start the MongoDB shell.
2. To set password:
	- Run `use admin` command.
	- Create a new user with administrative privileges by running the following command:
		```
		db.createUser({
		  user: "admin",
		  pwd: "your_password_here",
		  roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]})
		```
    - To open the MongoDB configuration file, enter `sudo nano /etc/mongod.conf`.
    - Navigate to **security** section and add the following line:
	    `security: 
	    `authorization: "enabled"
    - Restart the MongoDB service to apply the changes: <br/>
		`sudo systemctl restart mongod`
	- To open the MongoDB shell and to authenticate, type the following command: <br/>
	     `mongosh -u admin -p your_password_here --authenticationDatabase admin`

For more information about creating database and collection, refer [MongoDB documentation](https://www.mongodb.com/docs/).

## MySQL

 To set up and log into MySQL, follow these steps:
 
1. To log into MySQL, type:
    `sudo mysql`
2. To set a password for the Root User, use the following command:<br/>
	`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password_here';`
3. Flush the privileges to ensure that the changes take effect:
	`FLUSH PRIVILEGES;`
4. To exit the MySQL prompt, type `EXIT;`.
5. To log in with the password, type `mysql -u root -p`.
6. Enter the password when prompted. 

For more information, refer [MySQL documentation](https://dev.mysql.com/doc/).

## PostgreSQL
 
 To set up and log into PostgreSQL, follow these steps:
 
1. To log into PostgreSQL, switch to the postgres user and then access the PostgreSQL prompt:
	`sudo -i -u postgres`
2. To access the PostgreSQL prompt, type `psql`.
3. To set a password for the postgres user, run the following command: <br/>
	`ALTER USER postgres WITH PASSWORD 'your_password_here';`
4. To exit the PostgreSQL prompt, type `\q`.
5. To ensure that PostgreSQL uses password authentication, edit the` pg_hba.conf` file by typing `sudo nano /etc/postgresql/14/main/pg_hba.conf` command.
6. Find the following lines: <br/>
	`local   all  postgres  peer `<br/>
	Change peer to md5: <br/>
	`local   all  postgres  md5`
7. Save and close the file.
8. Restart the PostgreSQL service to apply the changes:
	`sudo systemctl restart postgresql`
9. Log into PostgreSQL with the new password.
10. To switch to the postgres user, type`sudo -i -u postgres`.
11. Access the PostgreSQL prompt with the password: `psql -U postgres -W`
12. Enter the password when prompted.

For more information, refer [PostgreSQL documentation ](https://www.postgresql.org/docs/).

## Redis

To set up and log into Redis, follow these steps:

1. To log into Redis, type `redis-cli` in the Redis Command-Line Interface (CLI).
2. To set the password, edit the `redis-config` file:
   `sudo nano /etc/redis/redis.conf` 
3. Find the line that starts with `# requirepass` and uncomment it by removing `#`. Then, set your password:
	`requirepass your_password_here`
4. Save and close the file.
5. Restart the Redis server to apply the changes:
	`sudo systemctl restart redis-server`
6. To login with a password, type:
	`redis-cli -a your_password_here`.

For more information, refer [Redis documentation](https://redis.io/docs/latest/).

## Cassandra

To set up and log into Cassandra, follow these steps:

1. To log into Cassandra using `cqlsh`, open your terminal and type `cqlsh`.
2. To set the password, edit the `cassandra.yaml` configuration file:
	`sudo nano /etc/cassandra/cassandra.yaml`
3. Find the following lines and set the authenticator to `PasswordAuthenticator`:
	`authenticator: PasswordAuthenticator`
	`authorizer: CassandraAuthorizer`
4. Save and close the file.
5. Restart the Cassandra service to apply the changes:
	`sudo systemctl restart cassandra`
6. To login with a password, type:
    `cqlsh -u cassandra -p your_password_here`.

For more information, refer [Cassandra documentation](https://cassandra.apache.org/doc/latest/).

## Elasticsearch

To set up passwords for the built-in users, you can use the `elasticsearch-setup-passwords` tool. You can run this tool in either auto mode or interactive mode.
	- **Auto Mode** - This mode automatically generates passwords for all built-in users: <br/>
		`sudo /usr/share/elasticsearch/bin/elasticsearch-setup-passwords auto`
	-  **Interactive Mode** - This mode allows you to set passwords manually: <br/>
		`sudo /usr/share/elasticsearch/bin/elasticsearch-setup-passwords interactive`

 Follow the prompts to set passwords for the built-in users, including the elastic users. To verify password setup, make an authenticated request to Elasticsearch by using the following command:<br/>
	`curl -u elastic:your_password_here -X GET "localhost:9200/"`

### Using Kibana (Optional)

Kibana is optional but highly recommended for managing and visualizing Elasticsearch data.
- To configure Kibana: 
	1. Edit the `kibana.yml` configuration file to set the Elasticsearch URL and credentials:<br/>
		`sudo nano /etc/kibana/kibana.yml`
	2. Add the following commands:<br/>
		`elasticsearch.username: "elastic"`
		`elasticsearch.password: "your_password_here"`
	3. Start Kibana and type:<br/>
		`sudo systemctl start kibana && sudo systemctl enable kibana`
	4. To access the Kibana, navigate to http://localhost:5601 in your web browser and log in with the elastic user credentials.

For more information, refer the following links: [Elasticsearch documentation](https://www.elastic.co/docs), [Elasticsearch Guide](https://www.elastic.co/guide/en/kibana/current/index.html).