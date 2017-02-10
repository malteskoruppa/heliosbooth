# heliosbooth

This repository contains a transformed implementation of the Helios
voting booth, as detailed in our paper

 "Implementation-level Analysis of the JavaScript Helios Voting Client"

by Michael Backes, Christian Hammer, David Pfaff and Malte Skoruppa
published at the 31st Annual ACM Symposium on Applied Computing (SAC 2016).

As required by the Apache license, the modified files are clearly
marked at the beginning of the file.

To deploy the modified version:

1. Go to https://heliosvoting.org and follow the instructions to set
up a local Helios server. The original Helios codebase is available at
https://github.com/benadida/helios-server. Our transformations apply
to the latest revision available at the time of submission, namely
revision f5dc954c12 from the 6th September 2015.

2. Once the Helios server is set up, replace the folder heliosbooth/
from the original Helios codebase with the heliosbooth/ contained in
this repository.

That is all. The modified client is up and running!
