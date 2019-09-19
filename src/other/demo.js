const all = [
  {id:9,parent:{id:4}},
  {id:10,parent:{id:4}},
  {id:11,parent:{id:5}},
  {id:12,parent:{id:5}},
  {id:13,parent:{id:5}},
  {id:6,parent:{id:3}},
  {id:7,parent:{id:3}},
  {id:8,parent:{id:3}},
  {id:4,parent:{id:2}},
  {id:5,parent:{id:2}},
  {id:2,parent:{id:1}},
  {id:3,parent:{id:1}},
  {id:1,parent:null},
]
const sub = [
  {id:9,parent:{id:4}},
  {id:12,parent:{id:5}},
  {id:8,parent:{id:3}},
]

function extractParent(allTree,subNode){
  // {id:node对象}
  const totalIdMapToNode = allTree.reduce((acc,curr)=>{
      acc[curr.id] = curr
      return acc
  },{})
  // {需要找爸爸的子节点的id}
  const subNodeIdSet = subNode.reduce((acc,curr) => {
      acc.add(curr.id)
      return acc
  },new Set())

  const val = []
  for(let id of subNodeIdSet){
      const node = totalIdMapToNode[id]
      const parentId = node.parent && node.parent.id
      const parent = totalIdMapToNode[parentId]
      if(parent){
          subNodeIdSet.add(parentId);
          (parent.children || (parent.children = [])).push(node)
      }else{
          val.push(node)
      }
  }
  return val
}
console.log(extractParent(all,sub))