# Setting Configuration at Runtime

This exercise demonstrates how a containerized application can consume
configuration from the environment at runtime.

## Assumptions

1. A Docker client is installed locally, that is configured to communicate
   with a local or remote Docker daemon

## Become familiar with app

   Commands you can use:

   find . -maxdepth 2 -type d -exec ls -l "{}" \;
   tree -L 3                                          # if tree is installed
   exa -lTL 3                                         # if exa is installed
   cat package.json

## Use configuration in the environment at runtime

1. Get familiar with the app's port configuration

   Take a look at the file './src/index.js', and see how the app assesses
   whether an environment variable called PORT defines a port number, or not.
   If it's not defined, it defaults to port 3000.

2. Use an alternative port
 
   Run a container and specify an alternative port number for the app using an
   environment variable (what's the 'docker run' flag for specifying or
   amending environment variables)? Test out the app to see whether it can
   consume requests on the new port number.

Good job! You've specified configuration at runtime in order to nuance the
behavior of the app.
