export const STEP=1/120;
export const categories=['Korruption','Rufmord','Diebstahl','Gewalt','Machtmissbrauch','Betrug','Erpressung','Vandalismus'];
const interrupts=['Nachrichtenflut','Zeitdruck','Schlafmangel','Provokation'];
export function createBalance({seed=42,duration=45,disturbances=true}={}){
 if(!Number.isInteger(seed)||!Number.isFinite(duration)||duration<1||duration>120||typeof disturbances!=='boolean')throw Error('Invalid round settings');
 return {x:0,y:0,vx:0,vy:0,steps:0,accumulator:0,duration,disturbances,rng:(seed>>>0)||1,nextImpulse:180,interrupt:'',event:'',eventUntil:0,strikes:0,score:0,running:false,paused:false};
}
function random(s){s.rng=(Math.imul(1664525,s.rng)+1013904223)>>>0;return s.rng/4294967296;}
export function categoryAt(x,y){const angle=(Math.atan2(y,x)+Math.PI*2)%(Math.PI*2);return categories[Math.floor(angle/(Math.PI*2)*categories.length)];}
export function pauseBalance(s,value=true){s.paused=!!value;s.accumulator=0;}
export function advanceBalance(s,dt,input={x:0,y:0}){
 if(!s.running||s.paused||!Number.isFinite(dt)||dt<0)return;
 // A stalled/backgrounded renderer must require deliberate resume, never catch up.
 if(dt>.25){pauseBalance(s);return;}
 let x=Number.isFinite(input.x)?input.x:0,y=Number.isFinite(input.y)?input.y:0;const magnitude=Math.hypot(x,y);if(magnitude>1){x/=magnitude;y/=magnitude;}
 s.accumulator+=dt;
 while(s.accumulator+1e-10>=STEP&&s.running){
  s.accumulator=Math.max(0,s.accumulator-STEP);s.steps++;
  if(s.event&&s.steps>=s.eventUntil)s.event='';
  if(s.disturbances&&s.steps>=s.nextImpulse){const angle=random(s)*Math.PI*2,strength=.55+random(s)*.35;s.vx+=Math.cos(angle)*strength;s.vy+=Math.sin(angle)*strength;s.interrupt=interrupts[Math.floor(random(s)*interrupts.length)];s.nextImpulse=s.steps+180+Math.floor(random(s)*120);}
  s.vx=(s.vx+x*3.8*STEP)*Math.exp(-1.3*STEP);s.vy=(s.vy+y*3.8*STEP)*Math.exp(-1.3*STEP);s.x+=s.vx*STEP;s.y+=s.vy*STEP;
  const radius=Math.hypot(s.x,s.y);s.score+=STEP*(radius<.35?10:radius<.7?3:0);
  if(radius>=1){s.event=`Satire: ${categoryAt(s.x,s.y)} — zurück zur Mitte!`;s.eventUntil=s.steps+240;s.strikes++;s.x=s.x/radius*.8;s.y=s.y/radius*.8;s.vx*=-.35;s.vy*=-.35;}
  if(s.strikes>=3||s.steps*STEP>=s.duration-1e-10)s.running=false;
 }
}
