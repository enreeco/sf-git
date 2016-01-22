# SF-Git

Author: Enrico Murru (http://enree.co)


Deploy all Salesforce Org's metadata into a git repository

This app is ready to be deployed in Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

The app is ment to be used as a scheduled job (https://devcenter.heroku.com/articles/scheduler): the web server does anything other then redirecting to this repository for instructions.

Install the *Heroku Scheduler* add-on and configure a new job:

![Heroku Scheduler](https://raw.githubusercontent.com/enreeco/sf-git/master/stuff/heroku_scheduler.png)

**If you want notifications after a run, you need to implement your own bin's job (see the *doAll* callback)**

## App Flow

The app follows the following flow:

* Logins with an integration user to your ORG
* Lists all metadata
* Retrieves the zipped unpackaged files
* Clones the remote repository
* Unzips the zipped metadata inside the cloned respository
* Performs *git add -A*
* Performs *git commit*
* Perform *giti push* (if commit has differences)

## Env. Variables

This is the list of the supported environment variabled:

* SF_API_VERSION: Salesforce API version
* SF_USERNAME: Salesforce integration username
* SF_PASSWORD: Salesforce integration password (+token)
* GIT_IGNORE: coma separated list of items to be ignored by git (es. __MACOSX,.DS_Store) [optional]
* REPO_URL: remote git repo's URL (es. https://username:password@github.com/magicdev/reponame)
* REPO_COMMIT_MESSAGE: commit message (defaulted to "Automatic commit (sfgit)")
* REPO_USER_NAME: git actor's name (user.name)
* REPO_USER_EMAIL: git actor's email (user.email)
* REPO_README: content of the README.MD [optional]
* EXCLUDE_METADATA: coma separated list of unwanted metadata items (es. Scontrol,Settings) [optional]

## LICENSE

See the LICENSE file