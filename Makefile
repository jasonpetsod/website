.PHONY:
all:
	nanoc compile

.PHONY:
clean:
	rm -rf output

.PHONY:
install: clean all
	sudo rsync -avz --delete-after output/ /srv/www/jason.petsod.org
