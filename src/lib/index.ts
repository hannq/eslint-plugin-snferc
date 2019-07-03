import requireIndex from 'requireindex';
const rules = requireIndex(__dirname + "/rules");
const processors = requireIndex(__dirname + "/processors");

export {
  rules,
  processors
}
