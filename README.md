# bamazon
Author: Morgan Hamlin

Bamazon is a mock Amazon back-end application that uses mySql, node.js, and the inquirer package to allow users to "purchase" items via their command line. Taking in user input, it then updates the mySQL database.

This program will not allow a user to purchase an item that does not exit, or is not in stock. 

WALK THROUGH 

1. Clone this application into your local repository
2. Go to the repository in your command line
3. Run the following command:

![Run Application Command](/images/runApplication.png)

(10 items will display in the format of the image shown below)
![Item Information](/images/itemInfo.png)

4. Enter the item ID of the item you wish to purchase
5. Enter the amount you wish to purchase 
![Questions](/images/itemQuestions.png)


6. The database is updated(not visable through CLI)
7. The command line returns the price total (individual price * quantity chosen)
8. Instructions are provided on how to exit the application (seen below) 

![Exit](/images/signOff.png)