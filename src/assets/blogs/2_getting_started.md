Working through the goal of the offline mode and persistent data

Using the wonderful resource: PokeAPI

Have to coordinate data load and storage as well as updates when needed.

Reminder: I’m not publishing this to the app store and not trying to make money from it.

React Demo - Will eventually use a WASM solution for Postgre in the browser. For now, though, I’m doing a POC in a separate node app app that will save the data to a SQLite DB

App - utilize technology specific solutions when I get to things like Flutter 

So…why don't I just do this once and package the data with the data with the app? Well, I will! I will likely include the first 151 pokemon with the app. After that, I want the app to be relatively self-sufficient and routinely keep the data up-to-date with minimal involvement from me. The pokemon franchise moves quick! (Feels like a lot of work for a learning exercise…)