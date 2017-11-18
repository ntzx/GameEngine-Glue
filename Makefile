all:
	rm -r target || true
	mkdir target
	cp prebuilt/* target/
	NODE_ENV=production browserify -t babelify -o target/game_engine.js src/main.js
	NODE_ENV=production browserify -t babelify -o target/game_engine_test.js src/run_tests.js
	NODE_ENV=production browserify -t babelify -o target/paint_test.js src/paint_test.js
	cp utils/test.html utils/paint_test.html target/

test:
	node src/run_tests_node.js
