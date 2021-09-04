project command
npm init    create package.json in root of project
npm i express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator
npm i -D nodemon

front end
npm i -g create-react-app
create-react-app client

when we have protected routes we're getting a token that has a payload with the user's information
won't sending out our request to our server from our component
want to do that from a redux action and then we get the response 
from redux reducer




hopefully that make sense


https://github.com/bradtraversy/devconnector



// git command
git init                                   // create git project such as repository
git status                                // show all changes
git log --oneline                        //  show git uniqe id and commit message
git add .                               // add (modefied, removed, added) file or line of code to "Satage"
git commit -m "message for changes"    // commit all changes from stage to repository
git checkout -- .                     // back changes "." before send to stage in main branch "--"
git reset HEAD .                     // unstage all changes then use "checkout" for one another step back to main code
git reset "commit uniqe id"         //  move from repository to stage then can use checkout 
git reset --hard "commit uniqe id" // move exactly to this commit and not need to cheeck out direct from repository to work tree


// git branch
git branch dev                       // create "dev" branch
git branch -a                       // list all branch
git checkout dev                   // switch to branch "dev"
git branch -d dev                 // delete branch "dev"
git merge dev                    // merge master with dev branch
git log --graph                 // show log with more details like as graph

// git stash
git stash                     // save all non added or commited changes in another place. "if switch between branch with out commit that changes transfer to another branch automically"
git stash save "message"                  // save stash with message 
git stash list                           //  list all stashed changes
git stash drop                          // delete changes that save in stage
git stash show -p  "stash ID"          // show stash with details
git stash apply "stash ID"            // move changes from stash to work tree, do "stash drop" after this command


// gitignore
git rm --cached -r .         // when i want to ignore file or directory that committed previously
                              // then use "git add ." command 
                             // then use "git commit -m 'message' " command

// github
git remote add origin "remote address"         // load project github repository "remote name is origin"
git remote                                    // list all remote names
git push -u origin master                    // recieve project from remote "origin" in branch "master"
git pull origin                             // get all changes from remote "origin"
git clone "github-url"  "project-name"     // get project from github

now      << checkout  <<  "work tree"   -->    add command     -->   "stage"   -->   commit command -->   "repository"
                          "work tree"   <--    reset command   <--   "stage"   <--   reset command <--   "repository"