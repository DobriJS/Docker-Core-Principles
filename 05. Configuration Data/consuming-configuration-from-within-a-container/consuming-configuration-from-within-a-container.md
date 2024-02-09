# Consuming Configuration from within a Container

This exercise demonstrates how a containerized application can consume
configuration from the environment at different points in time, as needed.

## Assumptions

1. A Docker client is installed locally, that is configured to communicate
   with a local or remote Docker daemon

## Become familiar with app

   Commands you can use:

   find . -maxdepth 2 -type d -exec ls -l "{}" \;
   tree -L 3                                          # if tree is installed
   exa -lTL 3                                         # if exa is installed
   cat package.json

## Create separate images for dev and prod

1. Define build argument for NODE_ENV

   Edit the Dockerfile to add in an environment variable at a suitable location
   that will define the NODE_ENV environment variable. It's to be used with a
   build argument (ENV or ARG)? Give it a default value of 'production'.

2. Build a prod image for the app

   Use the amended Dockerfile to build a prod image for the application. Do you
   need to use a build argument? Give the image a suitable name to make it plain
   that it's the 'prod' image (e.g. todo-prod).

3. Build a dev image for the app

   Use the same Dockerfile and a build argument with a suitable value to build
   a dev image for the application. Give the image a suitable name to make it
   plain that it's the 'dev' image (e.g. todo-dev).

4. Check the image sizes

   Use the 'docker images' command to check the size of the 'dev' and 'prod'
   images. The 'prod' image should be smaller in size. Why?

## Persist NODE_ENV variable into a container

1. Get familiar with the entrypoint script

   Check out the docker-entrypoint.sh script located in the build context. See
   how it tests the value of the NODE_ENV variable to determine what gets run.
   Based on its value, it'll be either 'nodemon src/index.js' or
   'node src/index.js'.

2. Add an ENV instruction to the Dockerfile

   Amend the Dockerfile to add an ENV instruction to enable the value of the
   NODE_ENV variable to persist into a derived container. Be sure to use the
   ARG instruction in conjunction with the ENV instruction, so as to be able to
   make use of a build argument for NODE_ENV.

3. Change the CMD intsruction

   Alter the existing CMD instruction so that a container will execute the
   entrypoint script instead of 'node src/index.js'.

4. Build new images

   Build new images for dev and production based on the revised Dockerfile.

5. Test both images

   Run a container for each of the 'dev' and 'prod' images to make sure that
   they work as expected. The 'dev' container should use 'nodemon', whilst the
   'prod' container should use 'node'.

Good job! You've used configuration in the environment at different points in
the life of the app's definition to nuance it's runtime behavior.
