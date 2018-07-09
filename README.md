
## Addison Global Front End Tech Test


### How to get started

To setup this app, you will need to follow the instructions below:

1 - Run `npm install` or `yarn install` to install all project dependencies 

2 - Run `npm start` or `yarn start` to start the app.

It's done! You should have this project running straight way...

Demo: https://addisonglobal.herokuapp.com/


### Stack used

ReactJS

Redux

Styling: Bourbon Neat / SCSS

### Data Normalization
For the purpose of this project, I decided to change a bit the data format from the file provided in order to make it convenient to access information in some components.

The store was designed as follows:

##**Redux store:**

**events**: Stores all data related to each event received from request. In the array where can be found markets objects, each object has been replaced by its id only. 

**markets**: Stores all data related to each markets received from request. In the array where can be found selections objects, each object has been replaced by its id only.

**selections** : Stores all objects for each selection.

**betslip** : Keeps the betslip state and data inside it.

###Some insights about the data normalization and redux store designed for this app.

The decision to generate a store in this format is due to the fact that a redux store follows the guideline of being the "single source of truth", that is, the store must faithfully reflect the state of the application.

The hierarchical model allows us faster access when compared to the reference model, since all the information is directly arranged, it is necessary to access the key to return the desired information.

Access in a referenced way (retrieving the ID and then searching the respective entity for the object containing that id) has the disadvantage of access time, which can be more costly when compared to the hierarchical model.

In the worst case, we may have a cost of O (n) in access to information. However, we have that the data is normalized, because each ID is being referenced for an object that is present in the entity, which does not happen in the hierarchical model (that allows the duplication of data).

For this application, the objects returned in the store are in a format as follows:

{
key: {},
key: {},
}

This way, we can access the information of the object directly through the ID.

In addition, with the redux store organized in the format that was explained, we have that any object of any entity can be accessed in any component.


**Developed by @Tacio Belmonte - 2018**
//