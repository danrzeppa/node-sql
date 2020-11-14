'use strict';

var Harness = require('./support');
var user = Harness.defineUserTable();
var post = Harness.definePostTable();
var comment = Harness.defineCommentTable();

Harness.test({
  query: user.select(user.id).from(post.subQuery().select(post.id).union(user.subQuery().select(user.id))),
  pg: {
    text  : 'SELECT "user"."id" FROM ((SELECT "post"."id" FROM "post") UNION (SELECT "user"."id" FROM "user"))',
    string: 'SELECT "user"."id" FROM ((SELECT "post"."id" FROM "post") UNION (SELECT "user"."id" FROM "user"))'
  },
  sqlite: {
    text  : 'SELECT "user"."id" FROM ((SELECT "post"."id" FROM "post") UNION (SELECT "user"."id" FROM "user"))',
    string: 'SELECT "user"."id" FROM ((SELECT "post"."id" FROM "post") UNION (SELECT "user"."id" FROM "user"))'
  },
  mysql: {
    text  : 'SELECT `user`.`id` FROM ((SELECT `post`.`id` FROM `post`) UNION (SELECT `user`.`id` FROM `user`))',
    string: 'SELECT `user`.`id` FROM ((SELECT `post`.`id` FROM `post`) UNION (SELECT `user`.`id` FROM `user`))'
  },
  mssql: {
    text  : 'SELECT [user].[id] FROM ((SELECT [post].[id] FROM [post]) UNION (SELECT [user].[id] FROM [user]))',
    string: 'SELECT [user].[id] FROM ((SELECT [post].[id] FROM [post]) UNION (SELECT [user].[id] FROM [user]))'
  },
  oracle: {
    text  : 'SELECT "user"."id" FROM ((SELECT "post"."id" FROM "post") UNION (SELECT "user"."id" FROM "user"))',
    string: 'SELECT "user"."id" FROM ((SELECT "post"."id" FROM "post") UNION (SELECT "user"."id" FROM "user"))'
  },
  params: []
});


