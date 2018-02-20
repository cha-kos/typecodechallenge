# Type/Code Development Exercise

I solved this assessment using a Rails Backend, PostgreSQL database, and React.js frontend.

To run the application locally, please follow the steps below.

### Installations

To run this installation you need to following tools installed on your computer.

#### Ruby On Rails
 [Installation Instructions](http://railsapps.github.io/installrubyonrails-mac.html)

#### PostgreSQL
 [Installation Instructions](https://gist.github.com/sgnl/609557ebacd3378f3b72)

#### NPM
  [Installation Instructions](http://blog.teamtreehouse.com/install-node-js-npm-mac)

### Configuring Locally

  Clone the repository and navigate to the repository folder via your command line.
  Once inside of the repository folder, navigate into the `typecodeapp` folder.

  From the `typecode app` folder, first install the ruby dependencies by running the command:
    `bundle install`

  Once you have successfully installed the gems, install FrontEnd dependencies by running the command:
    `npm install`

  Setup your database by running the command:
    `bundle exec rake db:setup`
  This command will automatically seed the database with the five records asked for in the assessment prompt.

### Running Locally

  To run this application locally, start your local Rails server by running the command
    `rails s`

  Navigate to http://localhost:3000/ via your browser. Since there was no page to page navigation required
  for this challenge, I suggest starting at one of the URLs

  http://localhost:3000/#/article/i-dwell-in-possibility

  http://localhost:3000/#/article/i-have-seen-the-future-and-it-doesnt-work

  http://localhost:3000/#/article/we-dont-get-offered-crises-they-arrive

  http://localhost:3000/#/article/it-is-impossible-to-walk-rapidly-and-be-unhappy
  
  http://localhost:3000/#/article/knowledge-is-power
