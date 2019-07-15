// tslint:disable no-var-requires
require('../packages/types/index');
const glob = require('glob');
const path = require('path');
const globOptions = {
    ignore: ['**/node_modules/**', '**/_*'],
    silent: true,
    strict: false,
};
const [, , ...fileArgs] = process.argv;
function getMatches(pattern) {
    return new Promise((resolve, reject) => {
        glob(pattern, globOptions, (error, files) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(files);
            }
        });
    });
}
(fileArgs.length ? Promise.resolve(fileArgs.filter((f) => f !== '--')) : getMatches('**/*.spec.ts')).then((tests) => {
    for (const file of tests) {
        require(path.resolve(file));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQTtBQUVsQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDNUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRTVCLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQztJQUN2QyxNQUFNLEVBQUUsSUFBSTtJQUNaLE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQTtBQUVELE1BQU0sQ0FBQyxFQUFFLEFBQUQsRUFBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUE7QUFFdEMsU0FBUyxVQUFVLENBQUUsT0FBTztJQUMxQixPQUFPLElBQUksT0FBTyxDQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQy9DLElBQUksQ0FDRixPQUFPLEVBQ1AsV0FBVyxFQUNYLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2YsSUFBSSxLQUFLLEVBQUU7Z0JBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQUU7aUJBQ3ZCO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUFFO1FBQ3pCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUNsSCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtRQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0tBQzVCO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZSBuby12YXItcmVxdWlyZXNcbnJlcXVpcmUoJy4uL3BhY2thZ2VzL3R5cGVzL2luZGV4JylcblxuY29uc3QgZ2xvYiA9IHJlcXVpcmUoJ2dsb2InKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG5jb25zdCBnbG9iT3B0aW9ucyA9IHtcbiAgaWdub3JlOiBbJyoqL25vZGVfbW9kdWxlcy8qKicsICcqKi9fKiddLFxuICBzaWxlbnQ6IHRydWUsXG4gIHN0cmljdDogZmFsc2UsXG59XG5cbmNvbnN0IFssICwgLi4uZmlsZUFyZ3NdID0gcHJvY2Vzcy5hcmd2XG5cbmZ1bmN0aW9uIGdldE1hdGNoZXMgKHBhdHRlcm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZ1tdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZ2xvYihcbiAgICAgIHBhdHRlcm4sXG4gICAgICBnbG9iT3B0aW9ucyxcbiAgICAgIChlcnJvciwgZmlsZXMpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7IHJlamVjdChlcnJvcikgfVxuICAgICAgICBlbHNlIHsgcmVzb2x2ZShmaWxlcykgfVxuICAgICAgfVxuICAgIClcbiAgfSlcbn1cblxuKGZpbGVBcmdzLmxlbmd0aCA/IFByb21pc2UucmVzb2x2ZShmaWxlQXJncy5maWx0ZXIoKGYpID0+IGYgIT09ICctLScpKSA6IGdldE1hdGNoZXMoJyoqLyouc3BlYy50cycpKS50aGVuKCh0ZXN0cykgPT4ge1xuICBmb3IgKGNvbnN0IGZpbGUgb2YgdGVzdHMpIHtcbiAgICByZXF1aXJlKHBhdGgucmVzb2x2ZShmaWxlKSlcbiAgfVxufSlcbiJdfQ==