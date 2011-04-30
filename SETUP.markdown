# jason.petsod.org Development Environment Set Up

## Abstract

This document describes how to set up an environment for developing
jason.petsod.org.

## Background

I don't like having Ruby and its junk clutter up my system so great lengths
are taken to isolate it.

## Prerequisites

Set these environment variables to your liking:

        NANOC_ENV=  # path to isolated environment; dir should not exist yet

## Instructions

 1. Install Ruby >=1.8.6. Debian Lenny has Ruby 1.8.7, so we're all set here.

        sudo aptitude install ruby

 1. Install Rubygems. Lenny comes with 1.2.0 and while the author recommends
 >=1.3.5, it seems to work.

        sudo aptitude install rubygems

 1. Install nkryptic's sandbox to the global (!) environment. You can isolate
 it by creating a bootstrap isolated environment just to hold sandbox, but
 that's outside the scope of this document.

        sudo gem install nkryptic-sandbox -s http://gems.github.com

 1. Create and enter the sandbox.

        sandbox ${NANOC_ENV?}
        . ${NANOC_ENV?}/bin/activate_sandbox

 1. Install nanoc and its dependencies into the sandbox.

        gem install nanoc kramdown adsf sass

 1. Sanity check by running the `nanoc` command.

        nanoc

## Use

To enter the environment, run:

        . ${NANOC_ENV?}/bin/activate_sandbox

To leave the environment, run:

        deactivate_sandbox
