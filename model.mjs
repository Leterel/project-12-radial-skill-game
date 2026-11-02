export const TAU=Math.PI*2;
export function normalize(angle){return ((angle%TAU)+TAU)%TAU;}
export function distance(a,b){const d=normalize(a-b);return Math.min(d,TAU-d);}
export function sector(angle,count=16){return Math.floor(normalize(angle)/TAU*count);}
export function createGame(){return {angle:0,target:Math.PI/16,score:0,hits:0,misses:0,remaining:30,running:false,paused:false};}
export function tick(state,dt,direction){if(!state.running||state.paused)return;if(!Number.isFinite(dt)||dt<0)return;const elapsed=Math.min(dt,.05);state.angle=normalize(state.angle+direction*elapsed*2.4);state.remaining=Math.max(0,state.remaining-dt);if(state.remaining<1e-9)state.remaining=0;if(!state.remaining)state.running=false;}
export function hit(state,random=Math.random){if(!state.running||state.paused)return null;const accuracy=distance(state.angle,state.target);if(accuracy<=Math.PI/16){state.hits++;const points=Math.round(100*(1-accuracy/(Math.PI/16)));state.score+=Math.max(10,points);const next=sector(state.target)+1+Math.floor(random()*15);state.target=normalize((next+.5)*TAU/16);return true;}state.misses++;state.score=Math.max(0,state.score-25);return false;}
