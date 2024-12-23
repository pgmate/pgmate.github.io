start:
	@if [ ! -d ./pgmate/node_modules ]; then \
		echo "Installing node_modules..." ; \
		(cd pgmate && npm install) ; \
	fi ;
	(cd pgmate && npm start)

deploy:
	@if [ ! -d ./pgmate/node_modules ]; then \
		echo "Installing node_modules..." ; \
		(cd pgmate && npm install) ; \
	fi ;
	(cd pgmate && npm run deploy)