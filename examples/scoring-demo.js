// Standalone synthetic scoring demonstration; not a connected n8n execution.
const roleWeights = { "Reliability Engineer": 10, "Maintenance Manager": 8, "Plant Manager": 6 };
function score({opens,clicks,visits,intent,role}) {
  const points = 2*opens+5*clicks+4*visits+0.3*intent+(roleWeights[role]??5);
  return {points,tier:points>=45?1:points>=20?2:3};
}
const cases=[
 {opens:6,clicks:3,visits:4,intent:82,role:"Reliability Engineer",expected:1},
 {opens:1,clicks:0,visits:1,intent:32,role:"Maintenance Manager",expected:2},
 {opens:0,clicks:0,visits:0,intent:10,role:"Plant Manager",expected:3}
];
for (const item of cases) {
 const result=score(item);
 if(result.tier!==item.expected) throw new Error("Tier mismatch");
 console.log("Tier",result.tier,":",result.points.toFixed(1),"points");
}
console.log("Synthetic tier checks passed.");
