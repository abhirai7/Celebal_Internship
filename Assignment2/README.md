Assignment-2 (Utilize Node.js core modules such as File System, Path, and HTTP to create a simple file management tool that can create, read, and delete files.)

what index.js file contains and does !

-Create a file : http://localhost:3000/create?filename=test.txt&content=HelloWorld
-Read a file : http://localhost:3000/read?filename=test.txt
-Delete a file : http://localhost:3000/delete?filename=test.txt

Now does these Queries work :
?filename=test.txt&content=HelloWorld
This is the query string — it contains key-value pairs passed as input:

filename=test.txt → It tells the server the name of the file you want to create (test.txt).

content=HelloWorld → It tells the server what content to put inside the file (HelloWorld).
similarly for read and delete .