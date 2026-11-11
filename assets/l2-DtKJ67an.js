import{a as e,c as t,n,o as r,r as i,s as a,t as o}from"./view-DFS1kLaI.js";import{A as s,Dt as c,E as l,Et as u,F as d,J as f,K as p,L as m,O as h,Ot as g,R as _,St as v,T as y,W as b,X as x,Y as S,_t as C,a as w,b as T,c as E,ct as ee,dt as D,f as te,h as ne,i as O,kt as re,l as k,lt as A,m as ie,n as j,nt as M,p as ae,q as N,rt as P,s as oe,st as F,t as I,tt as se,ut as L,vt as ce,y as R,z as le}from"./top-field-CsLARGZD.js";function ue([e,t],n,r){let i=Math.max(n/e,r/t);return[(e-n/i)/2,(t-r/i)/2,n/i,r/i]}var z=94,B=324.5,V=415.5,H=22,de=14,fe=3.764;function pe([e,t],n,r,i){let a=Math.max(n/e,r/t),o=Math.min(1,Math.max(.6,(r/a-158/a-V)/B)),s=Math.max(o,de/(H*a));return{fit:o,under:s,lift:fe*H*(s-o),top:Math.max(-i,328-z/a-B*o)}}var me=`/openhome/assets/weave-PpN4HGJ3.webp`,he=`/openhome/assets/shelf-CpovSQpu.webp`,U=[1672,941],W=3500,G=[836,470.5],ge=new c(0,.79,0),_e=b.degToRad(21),ve={front:[[0,629.3],[1672,950.7]],back:[[0,278.6],[1672,576.2]],book:[[247.5,447.5],[617.5,349],[825,442.5],[442.5,544]]},ye=.042,K=[{key:`pebble`,px:[504,452],on:ye,cloth:`#8e8a83`,glass:`#d2cfc7`,light:[`#ffc98a`,`#fff0dc`],ring:`#ffbe85`},{key:`charcoal`,px:[1317,650],on:0,cloth:`#3a393c`,glass:`#a9aeab`,light:[`#489bff`,`#61edba`],ring:`#7ff2cc`},{key:`clay`,px:[884,662],on:0,cloth:`#b47c69`,glass:`#e0cbbf`,light:[`#ff8f66`,`#ffd2b8`],ring:`#ff7e4c`}],be=.36,xe=.42,Se=1.3,q={color:`#fff1dc`,candela:12.5,angle:.17,penumbra:1,from:[-.09,1.3,.32]},Ce={spot:1,glow:1.4},we={spot:1.5,glow:1},Te=.35,Ee=[593.1,830.9,1297.2],De={x:593.1,y:882.8,width:17.3},Oe=.0565,ke=.1826,Ae=`
  vec3 evening(vec3 plate) { return mix(plate, vec3(dot(plate, vec3(0.2126, 0.7152, 0.0722))), 0.25); }`;function je(e,t,n){let r=new h(t).lerp(new h(`#f2ded0`),.4),i=new x({color:t,roughness:1,specularIntensity:.2,sheen:.1,sheenRoughness:.5,sheenColor:r});return i.onBeforeCompile=t=>{Object.assign(t.uniforms,{uWeave:{value:e},uTile:{value:ke},uRelief:{value:.4}},n),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vAt;
varying vec3 vFacing;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vAt = position;
vFacing = normal;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
        varying vec3 vAt;
        varying vec3 vFacing;
        uniform sampler2D uWeave;
        uniform float uTile, uRelief;
        uniform vec3 uBounce, uRingLight, uTopLight;
        uniform vec2 uSpan;
        vec2 weave() {
          vec3 w = pow(abs(normalize(vFacing)), vec3(4.0));
          w /= w.x + w.y + w.z;
          vec3 p = vAt / uTile;
          return texture2D(uWeave, p.zy).rg * w.x + texture2D(uWeave, p.xz).rg * w.y + texture2D(uWeave, p.xy).rg * w.z;
        }
        vec3 relief(vec3 at, vec3 n, vec2 dH, float faceDirection) {
          vec3 sx = normalize(dFdx(at)), sy = normalize(dFdy(at));
          vec3 r1 = cross(sy, n), r2 = cross(n, sx);
          float det = dot(sx, r1) * faceDirection;
          return normalize(abs(det) * n - sign(det) * (dH.x * r1 + dH.y * r2));
        }`).replace(`#include <map_fragment>`,`#include <map_fragment>
diffuseColor.rgb *= pow(weave().x * 2.0, 1.6);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float height = weave().y;
        normal = relief(-vViewPosition, normal, vec2(dFdx(height), dFdy(height)) * uRelief, faceDirection);`).replace(`#include <lights_fragment_maps>`,`#include <lights_fragment_maps>
        float upCloth = clamp((vAt.y - uSpan.x) / (uSpan.y - uSpan.x), 0.0, 1.0);
        float facingUp = inverseTransformDirection(normal, viewMatrix).y;
        irradiance += uBounce * exp(-upCloth / 0.5) * (0.6 - 0.4 * facingUp)
          + uRingLight * exp(-upCloth / 0.1) * (0.6 - 0.4 * facingUp)
          + uTopLight * smoothstep(0.86, 1.0, upCloth) * clamp(facingUp + 0.3, 0.0, 1.0);`)},i}function Me(e,[t,n]){let r={uTime:{value:0},uDiffusion:{value:.68},uWeights:{value:[1,0,0,0,0,0,0,0]},uColorA:{value:new h(t)},uColorB:{value:new h(n)},uUpdateAngle:{value:0},uFillProgress:{value:0},uFillGain:{value:0},uGain:{value:0}},i=new x({color:e,roughness:.34,clearcoat:1,clearcoatRoughness:.04,ior:1.5});return i.userData.u=r,i.onBeforeCompile=e=>{Object.assign(e.uniforms,r),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vTop;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvTop = position.xz / ${Oe.toFixed(4)};`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nuniform float uGain;\nvarying vec2 vTop;\n${I}`).replace(`#include <map_fragment>`,`#include <map_fragment>
        float topEdge = pow(pow(abs(vTop.x), 4.2) + pow(abs(vTop.y), 4.2), 1.0 / 4.2);
        float bevel = smoothstep(0.9, 0.985, topEdge);
        // Milky where the frost is, a little deeper toward the middle; the bevel is clear, so you see into its shade.
        diffuseColor.rgb *= mix(mix(0.72, 1.0, smoothstep(0.0, 0.9, topEdge)), 0.5, bevel);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        totalEmissiveRadiance += uGain * (topField(vTop) * 0.8 + mix(uColorA, uColorB, 0.6) * 0.28)
          * (1.0 - 0.5 * smoothstep(0.5, 1.0, topEdge)) * (1.0 - 0.6 * bevel);`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
        reflectedLight.directDiffuse *= 0.22;`)},i}function Ne(e,t){return new L({uniforms:{uPhoto:e.uPhoto,uPlate:e.uPlate,uFloor:{value:t},uDim:{value:be},uRing:{value:new h(0,0,0)},uSpot:{value:new h(0,0,0)},uTint:{value:new h(`#f2f6f4`)}},vertexShader:`
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform mat4 uPhoto;
      uniform sampler2D uPlate;
      uniform vec3 uRing, uSpot, uTint;
      uniform float uFloor, uDim;
      varying vec3 vWorld;
      varying vec3 vNormal;
      ${Ae}
      void main() {
        vec3 n = normalize(vNormal), view = normalize(vWorld - cameraPosition);
        float facing = clamp(dot(n, -view), 0.0, 1.0), h = vWorld.y - uFloor;
        vec3 ray = refract(view, n, 1.0 / 1.45);
        vec3 through = vWorld + ray * min(ray.y < -0.02 ? h / -ray.y : 0.05, 0.05);
        vec4 at = uPhoto * vec4(through, 1.0);
        vec3 stone = evening(texture2D(uPlate, at.xy / at.w * 0.5 + 0.5).rgb);
        // Less of the ring's light low in the wall, where the ray comes down just behind it, than higher up.
        vec3 seen = stone * (uDim * 0.8 + 0.3 * uSpot + 1.2 * uRing * mix(0.6, 1.0, smoothstep(0.004, 0.02, h)));
        float rim = pow(1.0 - facing, 3.0);
        float turn = smoothstep(0.2, 0.7, length(fwidth(n))); // real edges, not the CAD's facets
        float lip = smoothstep(0.017, 0.023, h);
        vec3 caught = (vec3(0.05, 0.048, 0.045) + 0.3 * uSpot) * (0.35 * rim + 0.25 * turn)
          + uRing * (0.25 * rim + 0.2 * turn + 0.12 * lip);
        gl_FragColor = vec4(seen * uTint * (1.0 - 0.3 * rim) + caught, 1.0);
        #include <colorspace_fragment>
      }`})}function Pe(){let[e,t]=k.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).slice(1).map(Number),n=document.createElement(`canvas`);n.width=(e+8)*6,n.height=(t+8)*6;let r=n.getContext(`2d`);r.scale(6,6),r.translate(4,4),r.fillStyle=`#fff`,r.fill(new Path2D(k.match(/ d="([^"]+)"/)[1]),`evenodd`);let i=De.width/e,a=new N(new M((e+8)*i*j,(t+8)*i*j),new f({color:`#cfcac2`,alphaMap:new l(n),transparent:!0}));return a.position.set(De.x*j,De.y*j,1232.05*j),a.rotation.y=Math.PI,a}function Fe(e){let t=new L({uniforms:{uPhoto:e.uPhoto,uPlate:e.uPlate,uRing:{value:new h(0,0,0)},uShade:{value:.5}},vertexShader:`
      uniform mat4 uPhoto;
      varying vec2 vP;
      varying vec4 vPhoto;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vP = position.xz / 0.05244;
        vPhoto = uPhoto * world;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform sampler2D uPlate;
      uniform vec3 uRing;
      uniform float uShade;
      varying vec2 vP;
      varying vec4 vPhoto;
      ${Ae}
      void main() {
        // Rounder further out, as light spreads: the squircle eases toward a circle with distance.
        float sq = pow(pow(abs(vP.x), 4.2) + pow(abs(vP.y), 4.2), 1.0 / 4.2), round_ = length(vP);
        float r = mix(sq, round_, smoothstep(1.2, 2.6, round_));
        // Brightest right by the glass, under the body where the ring is, with Light Lab's ring a little way out.
        float ring = exp(-pow((r - 1.5) / 0.45, 2.0)), near = exp(-pow((r - 0.9) / 0.7, 2.0)), halo = exp(-pow((r - 1.06) / 1.3, 2.0));
        float fade = 1.0 - smoothstep(3.2, 4.6, round_); // well inside the patch's edge
        vec3 stone = evening(texture2D(uPlate, vPhoto.xy / vPhoto.w * 0.5 + 0.5).rgb);
        vec3 light = uRing * stone * (near * 1.2 + ring * 0.55 + halo * 0.65) * fade;
        // The body is 1.24 across and stands 25 mm clear of the surface: darkest under the glass, gone a little past it.
        float shade = uShade * (1.0 - smoothstep(0.7, 1.75, r));
        gl_FragColor = vec4(light, shade);
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,blending:5,blendSrc:201,blendDst:205}),n=new N(new M(.5,.5).rotateX(-Math.PI/2),t);return n.position.y=5e-4,n}function Ie(e){let t=new S({color:`#ffffff`});return t.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
uniform mat4 uPhoto;
varying vec4 vPhoto;
varying vec3 vAt;`).replace(`#include <project_vertex>`,`#include <project_vertex>
vec4 inRoom = modelMatrix * vec4(transformed, 1.0);
vAt = inRoom.xyz;
vPhoto = uPhoto * inRoom;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform sampler2D uPlate;
        uniform vec3 uEye, uSpotPos[3], uSpotDir[3], uSpotLight[3];
        uniform vec2 uSpotCos;
        uniform float uDim, uPool, uBeam;
        varying vec4 vPhoto;
        varying vec3 vAt;
        ${Ae}`).replace(`vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;`,`
        vec3 room = evening(texture2D(uPlate, vPhoto.xy / vPhoto.w * 0.5 + 0.5).rgb);
        vec3 beam = vec3(0.0), toHere = vAt - uEye;
        for (int s = 0; s < 3; s++) {
          if (uSpotLight[s].r <= 0.0005) continue;
          float lit = 0.0;
          for (int i = 0; i < 16; i++) {
            vec3 l = uEye + toHere * ((float(i) + 0.5) / 16.0) - uSpotPos[s];
            float d2 = dot(l, l);
            lit += smoothstep(uSpotCos.x, uSpotCos.y, dot(l, uSpotDir[s]) * inversesqrt(d2)) / (0.5 + d2);
          }
          beam += uSpotLight[s] * lit;
        }
        vec3 outgoingLight = room * (uDim + uPool * reflectedLight.directDiffuse) + beam * (length(toHere) / 16.0) * uBeam;`)},t}function Le(e,t){let[n,r,i,a]=e,o=new c().subVectors(r,n).cross(new c().subVectors(i,n)).dot(t)<0?[n,a,i,r]:[n,r,i,a],s=new y;return s.setAttribute(`position`,new d(o.flatMap(e=>[e.x,e.y,e.z]),3)),s.setAttribute(`normal`,new d(o.flatMap(()=>[t.x,t.y,t.z]),3)),s.setIndex([0,1,2,0,2,3]),s}function Re(e,t,n){let r=new A;r.background=new h().setRGB(.15,.142,.132);let i=(e,t,n,i)=>{let a=new N(new M(t,n),new f({color:new h().setRGB(...e),side:2}));a.position.copy(i),a.lookAt(0,0,0),r.add(a)},a=(e,r,i)=>new c().addScaledVector(t,e).addScaledVector(n,i).setY(r);i([.5,.48,.45],4,4,a(0,2.2,0)),i([.34,.325,.3],4,1.6,a(0,.9,-.45)),i([3.4,2.8,2.1],.9,1.3,a(-1.7,1.2,-.5)),i([.2,.195,.19],5,3,a(0,.8,2.6)),i([.6,.54,.46],1.5,.5,a(-.35,.72,-1.7));let o=new R(e),s=o.fromScene(r,.04).texture;return o.dispose(),s}function ze(e,[t,n,r,i],a=.05,o=20){let s=a/W;return e.makePerspective((t-G[0])*s,(t+r-G[0])*s,(G[1]-n)*s,(G[1]-n-i)*s,a,o)}var Be=e=>e*e*e*(e*(e*6-15)+10),Ve=(e,t,n,r,i)=>t>e?Math.min(t,e+n/r):Math.max(t,e-n/i);function He(e,{selected:t=0,onLoad:n=()=>{}}={}){let r=new T({canvas:e,antialias:!1});r.setPixelRatio(Math.min(devicePixelRatio,1.5)),r.shadowMap.enabled=!0,r.shadowMap.type=3;let i=new A;i.background=new h().setRGB(.1,.095,.09);let o=new se;o.position.copy(ge),o.rotation.x=-_e,o.updateMatrixWorld();let s=([e,t],n)=>{let r=new c((e-G[0])/W,-(t-G[1])/W,-1).applyQuaternion(o.quaternion);return ge.clone().addScaledVector(r,(n-ge.y)/r.y)},l=ve.front.map(e=>s(e,0)),d=ve.back.map(e=>s(e,0)),f=l[1].clone().sub(l[0]).normalize(),g=Math.atan2(f.z,f.x),y=new c(-f.z,0,f.x),b=new c(0,1,0),S=K.map(e=>s(e.px,e.on));i.environment=Re(r,f,y);let C=new ne(r,new re(1,1,{type:_,samples:4}));C.addPass(new ie(i,o)),C.addPass(new ae(new u(1,1),.16,.3,.98)),C.addPass(new te);let D=0,k=!1,M=!1,P=()=>D||=k?requestAnimationFrame(De):0,I=new v().load(he,P);I.colorSpace=ee;let L=new h(q.color),R={uPlate:{value:I},uPhoto:{value:ze(new p,[0,0,...U]).multiply(o.matrixWorldInverse)},uEye:{value:ge},uDim:{value:be},uPool:{value:xe},uBeam:{value:Se},uSpotPos:{value:S.map(()=>new c)},uSpotDir:{value:S.map(()=>new c)},uSpotLight:{value:S.map(()=>new c)},uSpotCos:{value:new u(Math.cos(q.angle),Math.cos(q.angle*(1-q.penumbra)))}},le=Ie(R),z=([e,t],n,r=0)=>e.clone().lerp(t,n).setY(r),B=(e,t,n)=>{let r=new N(Le(e,t),le);r.receiveShadow=n,i.add(r)};B([z(l,-.5),z(l,1.5),z(d,1.5),z(d,-.5)],b,!0),B(ve.book.map(e=>s(e,ye)),b,!0),B([z(d,-.5),z(d,1.5),z(d,1.5,2),z(d,-.5,2)],y,!1),B([z(l,-.5,-1.5),z(l,1.5,-1.5),z(l,1.5),z(l,-.5)],y,!1);let V=K.map((e,n)=>{let r=S[n],a=new ce(q.color,0,4,q.angle,q.penumbra,2);a.position.copy(r).addScaledVector(f,q.from[0]).addScaledVector(b,q.from[1]).addScaledVector(y,q.from[2]),a.target.position.copy(r).setY(r.y+.07),a.castShadow=!0,a.shadow.mapSize.set(512,512),a.shadow.camera.near=.6,a.shadow.camera.far=2.4,a.shadow.radius=9,a.shadow.blurSamples=16,a.shadow.bias=-4e-4,a.shadow.autoUpdate=!1,i.add(a,a.target),R.uSpotPos.value[n].copy(a.position),R.uSpotDir.value[n].copy(a.target.position).sub(a.position).normalize();let o=new m;o.position.copy(r),o.rotation.y=-g;let s=Fe(R);return o.add(s),i.add(o),{...e,at:r,lamp:a,holder:o,patch:s,spot:0,glow:0,goal:+(n===t),ringColor:new h(e.ring),topLight:new h(e.light[0]).lerp(new h(e.light[1]),.5),cloth:{uBounce:{value:new h(0,0,0)},uRingLight:{value:new h(0,0,0)},uTopLight:{value:new h(0,0,0)},uSpan:{value:new u(0,1)}},clothColor:e.cloth,glassTone:e.glass,top:null,base:null,logo:null}});new E().load(oe.speakerCad,e=>{let t=e.scene;t.updateMatrixWorld(!0);let r=w(),i=O(t.children.find(e=>e.children.length>10),r),a=Object.fromEntries(i.shell.map(e=>[e.userData.piece,e]));for(let[e,t]of Object.entries(i))if(![`shell`,`base`].includes(e))for(let e of t)e.visible=!1;a.logoWindow.visible=!1;let o=a.housing.geometry.boundingBox.min.y+.0235;r.housing.transparent=!1,r.housing.onBeforeCompile=e=>{e.uniforms.uHem={value:o},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vHeight;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vHeight = position.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vHeight;
uniform float uHem;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
if (vHeight < uHem) discard;`)},a.fabric.userData.part=`cloth`,a.plate.userData.part=`top`;for(let e of i.base)e.traverse(e=>e.isMesh&&(e.userData.part=`base`));let s=Pe();t.add(s),t.updateMatrixWorld(!0),a.fabric.parent.attach(s),s.userData.part=`logo`,t.position.set(-Ee[0]*j,-Ee[1]*j,-Ee[2]*j),a.fabric.geometry.computeBoundingBox();let{min:c,max:l}=a.fabric.geometry.boundingBox,u=new v().load(me,P);u.wrapS=u.wrapT=F,u.anisotropy=8;let d=new x({color:`#000000`,roughness:.06,envMapIntensity:.6,transparent:!0,blending:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});for(let e of V){let n=t.clone(!0);e.cloth.uSpan.value.set(c.y,l.y),e.top=Me(e.glassTone,e.light),e.base=Ne(R,e.at.y);let r=je(u,e.clothColor,e.cloth),i=[];n.traverse(t=>{if(!t.isMesh)return;let n=t.userData.part;n===`cloth`?t.material=r:n===`top`?t.material=e.top:n===`base`?i.push(t):n===`logo`&&(t.material=e.logo=t.material.clone()),t.castShadow=n===`cloth`||n===`top`});for(let t of i)t.material=e.base,t.add(new N(t.geometry,d));let a=new m;a.rotation.y=Math.PI,a.add(n),e.holder.add(a),e.lamp.shadow.needsUpdate=!0}M=!0,pe=performance.now(),n(),P()},void 0,e=>console.error(`[l2] design: the speaker CAD could not be loaded; the shelf shows without it.`,e));let H=new h(`#bdb8b0`),de=new h,fe=L.clone().multiply(new h().setRGB(1,.94,.86)).multiplyScalar(1.1),pe=performance.now();function De(e){D=0;let t=a.matches,n=Math.max(0,Math.min(.1,(e-pe)/1e3));pe=e;let r=!1;V.forEach((i,a)=>{let o=M?i.goal:0,s=o&&i.spot>=Te?1:0;i.spot=t?o:Ve(i.spot,o,n,Ce.spot,we.spot),i.glow=t?o:Ve(i.glow,s,n,Ce.glow,we.glow),(i.spot!==o||i.glow!==o)&&(r=!0);let c=Be(i.spot),l=Be(i.glow);i.lamp.intensity=q.candela*c,R.uSpotLight.value[a].set(L.r,L.g,L.b).multiplyScalar(c);let u=de.copy(i.ringColor).multiplyScalar(l);if(i.patch.material.uniforms.uRing.value.copy(u),i.patch.material.uniforms.uShade.value=.5*(1-.9*l),i.cloth.uBounce.value.copy(fe).multiplyScalar(c),i.cloth.uRingLight.value.copy(u).multiplyScalar(2.2),i.cloth.uTopLight.value.copy(i.topLight).multiplyScalar(1.6*l),!i.top)return;let d=i.top.userData.u;d.uGain.value=l,d.uTime.value=t?1.7:e/1e3,i.base.uniforms.uRing.value.copy(u),i.base.uniforms.uSpot.value.copy(L).multiplyScalar(c),i.logo.color.copy(H).lerp(de.copy(d.uColorB.value).multiplyScalar(1.5),l)}),C.render(),(r||!t&&V.some(e=>e.glow>.01))&&P()}return new ResizeObserver(()=>{let{clientWidth:t,clientHeight:n}=e;t&&n&&(r.setSize(t,n,!1),C.setPixelRatio(r.getPixelRatio()),C.setSize(t,n),ze(o.projectionMatrix,ue(U,t,n)),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),P())}).observe(e),new IntersectionObserver(([e])=>{k=e.isIntersecting,k&&(pe=performance.now(),P())}).observe(e),{select(e){V.forEach((t,n)=>t.goal=+(n===e)),P()}}}function Ue(e){let r=null,i=t(e.querySelector(`.finish-seg`),e=>r?.select(e));n(e,()=>r=He(e.querySelector(`.l2-design__scene`),{selected:i.index}),{rootMargin:`1500px 0px`,threshold:0})}var We=3.6,Ge=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function Ke(e,t=!1){if(t)return{angles:[Math.PI/2,-3*Math.PI/2],width:.15,gain:1,trail:0};let n=(e%We+We)%We,r=Ge((n-.3)/1.5),i=Ge((n-1.8)/.4),a=Ge(n/.3)*(1-Ge((n-2.2)/.9));return{angles:[-Math.PI/2+Math.PI*r,-Math.PI/2-Math.PI*r],width:.1+.05*i,gain:a*(1+.7*i),trail:Math.min(Math.PI*r,Math.PI*2*.3)}}var qe=`
  uniform float uAttention, uAttentionWidth, uAttentionGain, uAttentionTrail;
  uniform vec2 uAttentionAngles;
  float attentionSample(float angle) {
    vec2 delta = vec2(angle) - uAttentionAngles;
    vec2 distance = atan(sin(delta), cos(delta));
    vec2 scaled = distance / uAttentionWidth;
    vec2 spots = exp(-scaled * scaled);
    vec2 behind = distance * vec2(-1.0, 1.0);
    vec2 tails = 0.6 * pow(max(vec2(0.0), 1.0 - behind / max(0.00001, uAttentionTrail)), vec2(2.0))
      * smoothstep(vec2(0.0), vec2(0.08), behind) * step(vec2(0.0), behind);
    spots += tails * (1.0 - spots);
    return max(spots.x, spots.y) * uAttentionGain;
  }
`,Je=1.8,Ye=.6;function Xe(e,t=!1){let n=Math.max(0,Math.min(Je,e)),r=Ke(n),i=Math.max(0,Math.min(1,(Je-n)/Ye));return{...r,width:.1,gain:r.gain*i*i*(3-2*i),angles:t?[3*Math.PI/2,-Math.PI/2]:r.angles.map(e=>e+Math.PI),trail:t?0:r.trail}}function Ze(e,t=!1){let n=Ke(e.attentionTime,t),r=Xe(e.interruptedTime,t),i=e.attention>0?Math.min(1,e.interrupted/e.attention):0;return{angles:n.angles.map((e,t)=>e+(r.angles[t]-e)*i),width:n.width+(r.width-n.width)*i,gain:n.gain+(r.gain-n.gain)*i,trail:n.trail+(r.trail-n.trail)*i}}var Qe=e=>Math.max(0,Math.min(1,e));function $e(e=0,t=!1){return t?.25:.03+.97*Qe(Number.isFinite(e)?e:0)}var et=Math.PI*2,tt=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)},nt=.9,rt=.45,it=3.6;function at(e,t=!1){if(t)return .25;let n=Math.max(0,e)%it,r=e=>e<0||e>=.9?0:.6*tt(e/.4)*tt((nt-e)/.5);return r(n)+r(n-nt-rt)}var ot=2.4,st=.2,ct=.5,lt=3.6;function ut(e,t=!1){if(t)return{progress:.5,gain:.35};let n=Math.max(0,e)%lt;return{progress:Math.min(1,n/ot),gain:n<2.6?1:1-tt((n-ot-st)/ct)}}function dt(e){return Math.PI/2+e/2*et}var ft=2048,pt=[0];function mt(e){let t=Math.cos(e),n=Math.sin(e),r=1/(Math.abs(t)**4.2+Math.abs(n)**4.2)**(1/4.2);return[t*r,n*r]}var ht=mt(Math.PI/2);for(let e=1;e<=ft;e++){let t=mt(Math.PI/2+e/ft*et);pt.push(pt[e-1]+Math.hypot(t[0]-ht[0],t[1]-ht[1])),ht=t}function gt(e){let t=Math.max(0,Math.min(1,e))*pt[ft],n=0,r=ft;for(;r-n>1;){let e=n+r>>1;pt[e]<t?n=e:r=e}return(n+(t-pt[n])/(pt[r]-pt[n]))/ft*et}var _t=`
  uniform float uUpdating, uUpdateAngle, uVolume, uVolumeFraction, uVolumeEnd;
  uniform float uFilling, uFillProgress, uFillEnd, uFillGain;
  float fillSample(float angle) {
    if (uFillProgress <= 0.0) return 0.0;
    if (uFillProgress >= 1.0) return uFillGain;
    float phase = mod(angle + 1.57079632679, 6.28318530718);
    float distance = phase <= uFillEnd ? min(phase, uFillEnd - phase) : -min(phase - uFillEnd, 6.28318530718 - phase);
    return smoothstep(-0.025, 0.025, distance) * uFillGain;
  }
  float updateSample(float angle) {
    float distance = atan(sin(angle - uUpdateAngle), cos(angle - uUpdateAngle));
    return exp(-pow(distance / 0.16, 2.0));
  }
  float volumeSample(float angle) {
    if (uVolumeFraction <= 0.0) return 0.0;
    if (uVolumeFraction >= 1.0) return 1.0;
    float phase = mod(angle - 1.57079632679, 6.28318530718);
    float distance = phase <= uVolumeEnd ? min(phase, uVolumeEnd - phase) : -min(phase - uVolumeEnd, 6.28318530718 - phase);
    return smoothstep(-0.012, 0.012, distance);
  }
`,vt=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function yt(e,t=!1){if(t)return .25;let n=Math.max(0,e)%2;return n<.4?vt(n/.4):n<.7?1:n<1.3?1-vt((n-.7)/.6):0}var bt=`
  uniform float uNotification;
  float notificationSample(float angle) {
    float d = abs(atan(sin(angle - 1.57079632679), cos(angle - 1.57079632679)));
    return exp(-pow(d / 0.5, 2.0)) * (1.0 - smoothstep(0.65, 0.78539816339, d));
  }
`,J=(e,t,n,r,i,a=`none`,o=null)=>({id:e,name:t,top:n,base:r,description:i,cue:a,sound:o}),xt={inactive:{name:`Inactive`,details:[J(`display-off`,`Display off`,`sleep`,`none`,`Both light surfaces are off. This preview does not indicate real microphone status.`),J(`muted`,`Muted`,`sleep`,`muted`,`Top off; a steady peach base ring indicates simulated mute.`,`muted`),J(`error`,`Error`,`sleep`,`error`,`Top off; two gentle muted-red swells with a 0.45 s gap, followed by a 1.35 s rest.`,`error`,`error`)]},idle:{name:`Idle`,details:[J(`ready`,`Ready`,`idle`,`none`,`A small, still glow. Ready for the next interaction.`),J(`completed`,`Task completed`,`idle`,`completed`,`A single completion cue fades after 2.5 seconds. The speaker stays idle.`,`completed`,`completed`)]},listening:{name:`Listening`,details:[J(`receiving`,`Receiving input`,`listening`,`none`,`Light gathers gently toward the center with a four-second breath. Simulated input; no microphone.`,`none`,`receiving`),J(`answering`,`User answering a request`,`listening`,`input-volume`,`White base light follows your microphone volume after you enable it. Audio is analyzed locally, without recording or playback.`,`input-volume`)]},thinking:{name:`Thinking`,details:[J(`understanding`,`Understanding a request`,`thinking`,`none`,`Two to three light fields cross in the center. The Agent is understanding the request.`),J(`planning`,`Preparing a response`,`thinking`,`twin-orbit`,`Thinking motion with two opposite palette-matched points circling the base counterclockwise with fading trails.`,`palette`)]},working:{name:`Working`,details:[J(`executing`,`Executing a task`,`working`,`orbit`,`A broad field expands while a palette-matched point circles the base with a fading trail. This is activity, not a progress indicator.`,`palette`),J(`confirmation-required`,`Confirmation requested`,`blocked`,`confirmation-white`,`The task waits for permission. A white pulse rises, holds, and fades before a short 0.8 s pause.`,`confirmation-white`,`confirmation`),J(`background-active`,`Another task still running`,`working`,`background`,`The left half holds the top palette gradient; a matching point and trail travel along the right half from rear to front.`,`palette`),J(`paused`,`Paused`,`blocked`,`none`,`Execution is paused. A dim, still field remains without an attention cue.`),J(`attention`,`Needs attention`,`blocked`,`attention`,`Two white points travel from the rear in opposite directions, merge brighter at the front, then fade and repeat.`,`attention`,`attention`)]},speaking:{name:`Speaking`,details:[J(`responding`,`Responding`,`speaking`,`none`,`Simulated speech. Soft light follows a sample speech envelope; no audio is played.`),J(`reporting-result`,`Reporting a completed task`,`speaking`,`completed`,`Simulated speech with one completion cue. The cue fades after 2.5 seconds; no audio is played.`,`completed`),J(`interrupted`,`Interrupted`,`speaking`,`interrupted`,`Two white points with trails travel from the front along opposite sides, dim as they approach the rear and are fully off on meeting. Replay cue restarts the animation.`,`interrupted`),J(`notification`,`Notification`,`speaking`,`notification`,`One diffuse white point pulses at the front, spreading across the front quarter of the base. Simulated notification.`,`notification`,`notification`)]},hardwares:{name:`Hardware`,details:[J(`pairing`,`Pairing`,`updating`,`updating`,`Diffuse white points circle the top perimeter and base clockwise in sync. Simulated pairing.`,`hardware-white`,`pairing`),J(`updating`,`Updating`,`filling`,`filling`,`The base fills clockwise from the rear while a central white point expands to fill the top; both fade out together and repeat. Simulated update.`,`hardware-white`),J(`volume`,`Volume`,`idle`,`volume`,`Idle above; a white base arc fills clockwise from the front to show simulated volume.`,`hardware-white`,`volume`)]}};function St(e){let t=e.primaryState===`sleep`?`inactive`:e.primaryState,n=Object.hasOwn(xt,t)?t:`idle`,r=xt[n],i=n===`working`&&e.stateDetail===`missing-information`?`paused`:e.stateDetail;return{primary:n,state:r,detail:r.details.find(e=>e.id===i)??r.details[0]}}var Ct=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function wt(e){return e<0||e>=.8?0:e<.3?Ct(e/.3):1-Ct((e-.3)/.5)}function Tt(e,t,n=!1){let r=Math.max(0,t);if(e===`none`)return 0;if(e===`notification`)return yt(r,n);if(e===`muted`)return .5;if(e===`error`)return at(r,n);if(e===`filling`)return 1;if(e===`updating`)return n?.35:1;if(e===`volume`)return 1;if(e===`orbit`||e===`twin-orbit`)return n?.35:1;if(e===`interrupted`||e===`attention`)return n?.18:1;if(e===`background`)return n?.35:1;if(e===`input-volume`)return $e(0,n);if(e===`completed`)return r>=2.5?0:n?.35:Math.sin(Math.PI*r/2.5)**2;if(n||r>=30)return{confirmation:.2,"confirmation-white":.2}[e]??.12;if(e===`confirmation`||e===`confirmation-white`){let t=r%(e===`confirmation-white`?3.8:6);return t<1?Ct(t):t<2?1:t<3?1-Ct(t-2):0}let i=r<3?r:(r-3)%8;return wt(i)+wt(i-1.2)}function Et(e,t,n=!1,r=0){if(e.previewMode===`free`)return{weights:[1,0,0,0,0,0,0,0],top:1,base:1,orbit:0,twin:0,attention:0,interrupted:0,split:0,updating:0,filling:0,volume:0,notification:0,rate:1,cue:`palette`,status:`Shared palette`,replay:!1};let{detail:i}=St(e),a=[0,0,0,0,0,0,0,0],o={idle:1,listening:2,thinking:3,working:4,blocked:4,speaking:5,filling:6,updating:7}[i.top];o&&(a[o]=1);let s=n?0:Math.sin(t*Math.PI/2),c=t%4.8,l=n?.45:c>3.5?.25:.25+.35*Math.sin(Math.PI*c/3.5)**2*(.65+.35*Math.sin(t*5.4)**2),u={sleep:0,idle:.1,listening:.375+.075*s,thinking:.45,working:.375,blocked:.15,speaking:l,filling:.65,updating:n?.25:.65}[i.top]/.9,d={none:`No cue · Base off`,orbit:`Executing · Orbiting light with fading trail`,"input-volume":`Microphone volume · White glow`,"needs-you":`Needs you · Double pulse`,confirmation:`Confirmation · Rise, hold, fade`,background:`Other work · Steady glow with soft swell`,completed:`Completed · One-time cue`,attention:n?`Attention · Still white point at front`:`Attention · Two white points merge at front`}[i.base];return i.base===`completed`&&t>=2.5&&(d=`Completed · Cue finished`),i.base===`needs-you`&&(t>=30||n)&&(d=`Still waiting · Dim steady`),i.base===`confirmation`&&(t>=30||n)&&(d=`Confirmation · Dim steady amber`),i.base===`confirmation-white`&&(d=t>=30||n?`Confirmation · Dim steady white`:`Confirmation · White pulse with a short pause`),i.base===`background`&&(d=`Other work · Left gradient, right moving point`),i.base===`twin-orbit`&&(d=`Preparing · Two opposite counterclockwise lights`),d={notification:`Notification · Soft white pulse at front`,muted:`Muted · Steady peach`,error:`Error · Gentle muted-red swells`,filling:`Simulated update · Fill, fade, repeat`,updating:`Simulated pairing · Synchronized white orbit`,volume:`Simulated volume · White arc`}[i.base]??d,i.base===`interrupted`&&(d=t>=1.8?`Interrupted · Cue finished`:`Interrupted · Two white points meet at the rear`),{weights:a,top:u,base:i.base===`input-volume`?$e(r,n):Tt(i.base,t,n),orbit:+(i.base===`orbit`),twin:+(i.base===`twin-orbit`),attention:+!![`attention`,`interrupted`].includes(i.base),interrupted:+(i.base===`interrupted`),split:+(i.base===`background`),updating:+(i.base===`updating`),filling:+(i.base===`filling`),volume:+(i.base===`volume`),notification:+(i.base===`notification`),rate:+![`sleep`,`idle`,`blocked`,`filling`,`updating`].includes(i.top),cue:i.cue,status:d,replay:!!i.sound||[`interrupted`,`notification`,`needs-you`,`confirmation`,`confirmation-white`,`background`,`attention`,`completed`,`filling`,`error`].includes(i.base)}}function Dt(e,t=()=>0){let n,r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=1,d=Et(e,0,!1,t()),f=d,p=e=>({...e,weights:[...e.weights]});function m(){let t=`${e.previewMode}/${e.primaryState}/${e.stateDetail}`;t!==n&&(e.previewMode===`states`&&e.primaryState===`hardwares`&&e.stateDetail===`updating`&&d.filling===0&&(l=0),e.previewMode===`states`&&e.primaryState===`speaking`&&e.stateDetail===`interrupted`&&(s=0),n=t,r=0,u=0,f=p(d),e.previewMode===`states`&&e.primaryState===`working`&&e.stateDetail===`attention`&&d.attention===0&&(o=0),e.previewMode===`states`&&e.primaryState===`working`&&e.stateDetail===`background-active`&&d.split===0&&(c=0))}return m(),{replay(){r=0,o=0,s=0,c=0,l=0},step(n,p=!1){m();let h=Math.max(0,Math.min(n,.1)),g=r===0;e.motion&&(r+=h);let _=e.previewMode===`states`&&g&&r>0?St(e).detail.sound:null;u=p?1:Math.min(1,u+h/.8);let v=Et(e,r,p,t()),y=Ct(u);return d={...v,weights:v.weights.map((e,t)=>f.weights[t]+(e-f.weights[t])*y),top:f.top+(v.top-f.top)*y,base:f.base+(v.base-f.base)*y,orbit:f.orbit+(v.orbit-f.orbit)*y,twin:f.twin+(v.twin-f.twin)*y,attention:f.attention+(v.attention-f.attention)*y,interrupted:f.interrupted+(v.interrupted-f.interrupted)*y,split:f.split+(v.split-f.split)*y,updating:f.updating+(v.updating-f.updating)*y,filling:f.filling+(v.filling-f.filling)*y,volume:f.volume+(v.volume-f.volume)*y,notification:f.notification+(v.notification-f.notification)*y,rate:f.rate+(v.rate-f.rate)*y},e.motion&&!p&&(i+=h*e.speed/.65*d.rate),e.motion&&!p&&(a+=h),e.motion&&!p&&d.attention>0&&(o+=h),e.motion&&d.interrupted>0&&(s+=h),e.motion&&!p&&d.split>0&&(c+=h),e.motion&&!p&&d.filling>0&&(l+=h),{...d,age:r,phase:i,orbitTime:a,attentionTime:o,interruptedTime:s,splitTime:c,fillTime:l,transition:y,sound:_}}}}var Ot=.3,kt=`
  uniform float uOrbit, uOrbitTime, uTwin, uSplit, uSplitTime;
  uniform vec3 uColorA, uColorB;
  vec2 chaseSample(float angle, float seconds) {
    float behind = fract(seconds / ${1 .toFixed(1)} - angle / 6.28318530718);
    float distance = min(behind, 1.0 - behind);
    float head = exp(-pow(distance / 0.018, 2.0));
    float tail = 0.8 * pow(max(0.0, 1.0 - behind / ${Ot.toFixed(2)}), 2.0)
      * smoothstep(0.0, 0.014, behind);
    float highlight = behind > 0.5 ? 1.0 : max(0.0, 1.0 - behind / ${Ot.toFixed(2)});
    return vec2(head + tail * (1.0 - head), highlight);
  }
  vec2 orbitSample(float angle) { return chaseSample(angle, uOrbitTime); }
  vec2 twinOrbitSample(float angle) {
    vec2 first = chaseSample(-angle, uOrbitTime);
    vec2 second = chaseSample(-angle + 3.14159265359, uOrbitTime);
    float level = first.x + second.x;
    return vec2(level, (first.x * first.y + second.x * second.y) / max(level, 0.000001));
  }
  vec3 backgroundLight(float angle) {
    float right = smoothstep(-0.025, 0.025, cos(angle));
    vec2 chase = chaseSample(angle, uSplitTime - ${(1/4).toFixed(2)});
    vec3 leftLight = mix(uColorA, uColorB, sin(angle) * 0.5 + 0.5) * 0.35;
    vec3 rightLight = mix(uColorA, uColorB, chase.y) * chase.x;
    return leftLight * (1.0 - right) + rightLight * right;
  }
`,At={topIntensity:.9,diffusion:.72,speed:.65,baseIntensity:2.75,spread:1},jt=[`#489bff`,`#61edba`],Mt={"needs-you":`#ffd27a`,confirmation:`#ffad66`,background:`#ffe6af`,attention:`#ffffff`,"input-volume":`#ffffff`,completed:`#fff0d9`,interrupted:`#ffffff`,notification:`#ffffff`,muted:`#ffd4af`,error:`#945c56`,"confirmation-white":`#ffffff`,"hardware-white":`#ffffff`},Nt=9.6/6.92,Pt=1.195,Ft=2.05,It=e=>[1,3,5].map(t=>{let n=parseInt(e.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4}),Lt=`attribute vec2 a;varying vec2 vUv;void main(){vUv=a*.5+.5;gl_Position=vec4(a,0.,1.);}`,Rt=`
precision highp float;
varying vec2 vUv;
uniform float uView;
const float TABLE = ${Nt.toFixed(4)}, SIL = ${Pt.toFixed(3)};
float squircle(vec2 p) { return pow(pow(abs(p.x), 4.2) + pow(abs(p.y), 4.2), 1.0 / 4.2); }
vec2 world() { return (vUv * 2.0 - 1.0) * uView; }  // at the plate's height; x = X, y = -Z (the rear is up)
`,zt=`${Rt}
uniform float uIntensity, uPx, uTouch;
uniform vec2 uTouchAt;
uniform vec3 uFabric;
${I}
// three.js ACESFilmicToneMapping, exposure 1.15 as in Light Lab
vec3 aces(vec3 c) {
  c *= 1.15 / 0.6;
  c = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777) * c;
  c = (c * (c + 0.0245786) - 0.000090537) / (c * (0.983729 * c + 0.4329510) + 0.238081);
  return clamp(mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602) * c, 0.0, 1.0);
}
vec3 srgb(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }

void main() {
  vec2 q = world();
  float r = squircle(q);
  float aa = uPx * 1.5;

  // no table of its own: the section's marble shows through (premultiplied alpha), darkened only by the speaker's shadow —
  // tight where it stands, soft and wide down to the right, the light coming from the upper left. The power
  // cable leaves from the rear and fades out before the canvas ends.
  float shade = 0.38 * exp(-max(r - SIL, 0.0) / 0.09);
  shade = 1.0 - (1.0 - shade) * (1.0 - 0.32 * (1.0 - smoothstep(SIL * 0.8, SIL * 1.45, squircle(q - vec2(0.16, -0.2)))));
  vec4 col = vec4(0.0, 0.0, 0.0, shade);
  float cable = q.x - 0.18 * smoothstep(1.3, 2.2, q.y);
  col = mix(col, vec4(uFabric * 0.92, 1.0), (1.0 - smoothstep(0.024, 0.024 + aa, abs(cable))) * step(0.0, q.y) * (1.0 - smoothstep(1.45, 1.95, q.y)));

  // the top field, as on Light Lab's display (p = X, Z across the display)
  vec2 p = vec2(q.x, -q.y) / 1.058;
  float edge = squircle(p);
  vec3 light = topField(p);
  // + a little room light scattered in the frosted slab, which Light Lab gets from the glass under the display
  vec3 glass = srgb(aces(vec3(0.030, 0.021, 0.017) + vec3(0.05, 0.048, 0.045)
    + light * uIntensity * (1.0 - smoothstep(0.75, 1.015, edge))));
  glass += 0.035 * smoothstep(0.9, -0.9, q.x * 0.5 - q.y);           // a faint sheen from the room
  glass += 0.06 * smoothstep(1.06, 1.077, r) * (1.0 - smoothstep(1.077, 1.082, r)); // the plate's rounded edge
  // under a finger: a soft, diffuse brightening through the frosted glass, never a drawn mark
  glass += vec3(0.16) * uTouch * exp(-dot(q - uTouchAt, q - uTouchAt) / 0.05);

  // fabric shoulder: rounds away from the plate to the silhouette, lit from the upper left; a little top light
  // spills onto it
  float knit = sin(q.x * 260.0) * sin(q.y * 260.0) * 0.5 + 0.5;
  float fall = smoothstep(1.1, SIL, r);
  vec3 fabric = uFabric * (0.84 + 0.16 * knit) * (1.0 - 0.35 * fall * fall) * (1.0 + 0.08 * clamp(q.y - q.x, -1.0, 1.0));
  fabric += srgb(aces(light * uIntensity * 0.35)) * 0.25 * (1.0 - smoothstep(1.09, 1.15, r));

  col = mix(col, vec4(fabric, 1.0), 1.0 - smoothstep(SIL - aa, SIL + aa, r));
  col.rgb *= 1.0 - 0.55 * (smoothstep(1.077 - aa, 1.077, r) - smoothstep(1.09, 1.09 + aa, r)); // the 0.7 mm gap
  col.rgb = mix(col.rgb, glass, 1.0 - smoothstep(1.077 - aa, 1.077, r));
  gl_FragColor = col;
}`,Bt=`${Rt}
uniform float uTime, uIntensity, uSpread, uPx;
uniform vec3 uColor;
${kt}
${qe}
${_t}
${bt}
vec3 sourceLight(float angle) {
  vec3 light = uColor * max(0.0, 1.0 - uOrbit - uAttention - uSplit - uTwin - uUpdating - uVolume - uFilling - uNotification);
  if (uNotification > 0.0) light += vec3(notificationSample(angle)) * 2.4 * uNotification;
  if (uFilling > 0.0) light += vec3(fillSample(angle)) * uFilling;
  if (uUpdating > 0.0) light += vec3(updateSample(angle)) * 2.4 * uUpdating;
  if (uVolume > 0.0) light += vec3(volumeSample(angle)) * uVolume;
  if (uOrbit > 0.0) {
    vec2 chase = orbitSample(angle);
    light += mix(uColorA, uColorB, chase.y) * chase.x * 2.4 * uOrbit;
  }
  if (uTwin > 0.0) {
    vec2 twin = twinOrbitSample(angle);
    light += mix(uColorA, uColorB, twin.y) * twin.x * 2.4 * uTwin;
  }
  if (uAttention > 0.0) light += vec3(attentionSample(angle)) * 2.4 * uAttention;
  if (uSplit > 0.0) light += backgroundLight(angle) * 2.4 * uSplit;
  return light;
}
vec3 projectedLight(float angle, float sigma) {
  vec3 light = vec3(0.0);
  float total = 0.0;
  // Not in Light Lab: each pixel shifts its taps a little, so a hard arc end blurs to fine grain instead of a fan
  // of rays, which a light page shows where the dark table hid it.
  float jitter = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5;
  for (int i = -8; i <= 8; i++) {
    float offset = (float(i) + jitter) * 0.3125;
    float weight = exp(-0.5 * offset * offset);
    light += sourceLight(angle + offset * sigma) * weight;
    total += weight;
  }
  return light / total;
}
void main() {
  vec2 p = world() * TABLE;  // on the table
  float r = squircle(p);
  float angle = atan(p.y, p.x);
  float wobble = sin(angle * 3.0 + uTime * 0.22) * 0.018;
  float offset = mix(0.09, 0.55, uSpread);
  float width = mix(0.065, 0.24, uSpread);
  float ring = exp(-pow((r - 1.03 - offset - wobble) / width, 2.0));
  float halo = exp(-pow((r - 1.06) / (0.22 + uSpread * 0.78), 2.0));
  float edge = smoothstep(0.78, 1.16, r);
  float energy = (ring * 0.26 + halo * 0.18) * edge * uIntensity;
  float sigma = 0.14 + uSpread * 0.10 + smoothstep(1.0, 2.2, r) * 0.12;
  vec3 baseLight = projectedLight(atan(-p.y, p.x), sigma);
  float top = squircle(world());  // under the body, seen from above
  float hidden = 1.0 - smoothstep(SIL - uPx * 1.5, SIL + uPx * 1.5, top);
  float fade = 1.0 - smoothstep(0.8, 1.0, length(vUv * 2.0 - 1.0));  // gone before the canvas ends
  // On a light page, adding would clip to a white blob. Instead the lamp takes the page over by how strong it is:
  // its own colour at full value, mixed in by s (premultiplied). White light brightens, colour tints, nothing clips.
  vec3 lamp = baseLight * energy * (1.0 - hidden) * fade;
  float peak = max(lamp.r, max(lamp.g, lamp.b));
  float s = 1.0 - exp(-peak * 1.5);
  gl_FragColor = vec4(lamp / max(peak, 1e-4) * s, s);
}`;function Vt(e,t){let n=(t,n)=>{let r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r));return r},r=e.createProgram();if(e.attachShader(r,n(e.VERTEX_SHADER,Lt)),e.attachShader(r,n(e.FRAGMENT_SHADER,t)),e.bindAttribLocation(r,0,`a`),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(e.getProgramInfoLog(r));let i={};return{p:r,loc:t=>t in i?i[t]:i[t]=e.getUniformLocation(r,t)}}function Ht(e,t,{at:n=0}={}){let r=e.getContext(`webgl`,{antialias:!1});if(!r)return null;let i=Vt(r,zt),o=Vt(r,Bt);r.bindBuffer(r.ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),r.STATIC_DRAW),r.enableVertexAttribArray(0),r.vertexAttribPointer(0,2,r.FLOAT,!1,0,0),Object.assign(t,{previewMode:`states`,motion:!0,speed:At.speed});let s=Dt(t);for(let e=0;e<n;e+=1/60)s.step(1/60,a.matches);let[c,l]=jt.map(It),u=Object.fromEntries(Object.entries(Mt).map(([e,t])=>[e,It(t)])),d=[...c],f=!1,p=0,m=!0,h=!1,g=0,_=[0,0],v=(t,n)=>{let r=e.getBoundingClientRect();return[((t-r.left)/r.width*2-1)*Ft,(1-(n-r.top)/r.height*2)*Ft]},y=([e,t])=>(Math.abs(e)**4.2+Math.abs(t)**4.2)**(1/4.2),b=n=>{let f=a.matches,p=s.step(n,f),v=m||f?1:1-Math.exp(-n*6);m=!1;let y=.5+.3*Math.sin(p.phase*.65*.55),b=u[p.cue]??c.map((e,t)=>e+(l[t]-e)*y);d.forEach((e,t)=>d[t]=e+(b[t]-e)*v);let x=ut(p.fillTime,f),S=Ze(p,f),C=2*Ft/e.width;g=f?Number(h):g+(Number(h)-g)*(1-Math.exp(-n/(h?.08:.3))),r.viewport(0,0,e.width,e.height),r.disable(r.BLEND),r.useProgram(i.p);let w=i.loc;r.uniform1f(w(`uView`),Ft),r.uniform1f(w(`uPx`),C),r.uniform3f(w(`uFabric`),.68,.655,.6),r.uniform1f(w(`uIntensity`),At.topIntensity*p.top),r.uniform1f(w(`uTime`),p.phase),r.uniform1f(w(`uDiffusion`),At.diffusion),r.uniform3fv(w(`uColorA`),c),r.uniform3fv(w(`uColorB`),l),r.uniform1fv(w(`uWeights[0]`),p.weights),r.uniform1f(w(`uUpdateAngle`),dt(p.orbitTime)),r.uniform1f(w(`uFillProgress`),x.progress),r.uniform1f(w(`uFillGain`),x.gain),r.uniform1f(w(`uTouch`),g),r.uniform2fv(w(`uTouchAt`),_),r.drawArrays(r.TRIANGLES,0,3),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r.useProgram(o.p);let T=o.loc;r.uniform1f(T(`uView`),Ft),r.uniform1f(T(`uPx`),C),r.uniform1f(T(`uTime`),p.phase),r.uniform1f(T(`uIntensity`),At.baseIntensity*p.base),r.uniform1f(T(`uSpread`),At.spread),r.uniform3fv(T(`uColor`),d),r.uniform3fv(T(`uColorA`),c),r.uniform3fv(T(`uColorB`),l),r.uniform1f(T(`uNotification`),p.notification),r.uniform1f(T(`uOrbit`),p.orbit),r.uniform1f(T(`uTwin`),p.twin),r.uniform1f(T(`uOrbitTime`),p.orbitTime),r.uniform1f(T(`uUpdating`),p.updating),r.uniform1f(T(`uUpdateAngle`),dt(p.orbitTime)),r.uniform1f(T(`uFilling`),p.filling),r.uniform1f(T(`uFillProgress`),x.progress),r.uniform1f(T(`uFillGain`),x.gain),r.uniform1f(T(`uFillEnd`),gt(x.progress)),r.uniform1f(T(`uVolume`),p.volume),r.uniform1f(T(`uVolumeFraction`),t.volume),r.uniform1f(T(`uVolumeEnd`),gt(t.volume)),r.uniform1f(T(`uSplit`),p.split),r.uniform1f(T(`uSplitTime`),f?1/4:p.splitTime),r.uniform1f(T(`uAttention`),p.attention),r.uniform2fv(T(`uAttentionAngles`),S.angles),r.uniform1f(T(`uAttentionWidth`),S.width),r.uniform1f(T(`uAttentionGain`),S.gain),r.uniform1f(T(`uAttentionTrail`),S.trail),r.drawArrays(r.TRIANGLES,0,3)},x=e=>{if(!f)return;requestAnimationFrame(x);let t=Math.min(.1,(e-p)/1e3);p=e,b(t)};return new ResizeObserver(()=>{let t=Math.min(devicePixelRatio,2);e.width=Math.round(e.clientWidth*t),e.height=Math.round(e.clientHeight*t),f||b(0)}).observe(e),new IntersectionObserver(([e])=>{f=e.isIntersecting,f&&(p=performance.now(),requestAnimationFrame(x))}).observe(e),{replay:()=>s.replay(),hit(e,t){let n=y(v(e,t));return n<=1.077?`top`:n<=Pt?`body`:null},press(e,t){h=!0,_=v(e,t)},follow(e,t){h&&(_=v(e,t))},release(){h=!1}}}function Ut(){let e=`idle`,t=0,n=0,r=0,i=0,a=0;return{down(i,a,o){return e=`down`,t=i,n=a,r=o,[]},move(t,a,o){return e===`down`&&Math.hypot(a-n,o-r)>=8&&(e=`slide`,i=0),e===`slide`?[{type:`slide`,dy:o-r}]:[]},up(t){let n=[];return e===`down`?(i+=1,a=t,i===3&&(n.push({type:`tap`,count:3}),i=0)):e===`hold`?n.push({type:`holdEnd`}):e===`slide`&&n.push({type:`slideEnd`}),e=`idle`,n},cancel(t){let n=[];return e===`hold`&&n.push({type:`holdEnd`}),e===`slide`&&n.push({type:`slideEnd`}),e=`idle`,i=0,n},tick(n){let r=[];return e===`down`&&n-t>=500&&(e=`hold`,i=0,r.push({type:`holdStart`})),e===`idle`&&i>0&&n-a>=300&&(r.push({type:`tap`,count:i}),i=0),r},pending:()=>e!==`idle`||i>0}}var Y=[`idle/ready`],Wt={tap:[[`speaking/interrupted`,1800],Y],"double-tap":[[`idle/completed`,2500],Y],"triple-tap":[[`inactive/muted`,3e3],Y],rest:[[`thinking/understanding`,1600],[`speaking/responding`,3e3],Y]},Gt=e=>[[e,`down`],[e+100,`up`]],Kt={rest:[[0,`show`,.5,.5],[350,`down`],[350,`light`,[[`listening/receiving`]]],[2350,`up`],[2350,`light`,Wt.rest],[2700,`hide`]],tap:[[0,`light`,[[`speaking/responding`]]],[900,`show`,.5,.5],...Gt(1500),[1500,`light`,Wt.tap],[2e3,`hide`]],"double-tap":[[0,`show`,.5,.5],...Gt(400),...Gt(620),[720,`light`,Wt[`double-tap`]],[1200,`hide`]],"triple-tap":[[0,`show`,.5,.5],...Gt(400),...Gt(600),...Gt(800),[900,`light`,Wt[`triple-tap`]],[1400,`hide`]],slide:[[0,`show`,.5,.64],[350,`down`],[350,`light`,[[`hardwares/volume`,0,.5]]],...[1,2,3,4,5,6].map(e=>[450+e*80,`to`,.5,.64-e*.04,.5+e*.05]),[1250,`up`],[1250,`light`,[[`hardwares/volume`,1500,.8],Y]],[1550,`hide`]]},qt=e=>Math.max(...e.map(([e,t,n])=>e+(t===`light`?n.reduce((e,[,t=0])=>e+t,0):0))),Jt=[`slide`,`rest`,`tap`,`double-tap`,`triple-tap`],Yt=[`tap`,`double-tap`,`triple-tap`],Xt=e=>Math.max(0,Math.min(1,e));function Zt(e){let t={primaryState:`idle`,stateDetail:`ready`,volume:.5},n=new URLSearchParams(location.search),[r,i]=(n.get(`light`)??``).split(`/`);xt[r]?.details.some(e=>e.id===i)&&Object.assign(t,{primaryState:r,stateDetail:i}),n.has(`volume`)&&(t.volume=Xt(Number(n.get(`volume`))||0));let o=Math.max(0,Math.min(30,Number(n.get(`at`))||0)),s=e.querySelector(`.touch__top`),c=Ht(s,t,{at:o});if(!c)return null;let l=e.querySelector(`.touch__finger`)??document.createElement(`span`),u=e.querySelector(`.touch__status`)??document.createElement(`p`),d=()=>a.matches,f=[],p=()=>{f.forEach(clearTimeout),f=[]},m=(e,n)=>{let[r,i]=e.split(`/`);r===t.primaryState&&i===t.stateDetail&&n===void 0&&c.replay(),Object.assign(t,{primaryState:r,stateDetail:i}),n!==void 0&&(t.volume=n),h()},h=()=>e.classList.toggle(`is-lit`,`${t.primaryState}/${t.stateDetail}`!==Y[0]);h();let g=e=>{p();let t=0;for(let[n,r=0,i]of e)f.push(setTimeout(()=>m(n,i),t)),t+=r},_=[...e.querySelectorAll(`[data-gesture]`)],v=(e,t=!0)=>{for(let n of _){let r=n.dataset.gesture===e;n.toggleAttribute(`aria-current`,r),r&&t&&(u.textContent=`${n.querySelector(`button`).textContent}. ${n.querySelector(`p`).textContent}`)}},y=[],b=.5,x=.5,S=(e,t)=>{let n=s.getBoundingClientRect();return[n.left+e*n.width,n.top+t*n.height]},C=(e,t)=>{b=e,x=t,l.style.left=`${e*100}%`,l.style.top=`${t*100}%`},w={show:(e,t)=>(C(e,t),l.className=`touch__finger is-on`),down:()=>(l.classList.add(`is-down`),c.press(...S(b,x))),up:()=>(l.classList.remove(`is-down`),c.release()),to:(e,t,n)=>(C(e,t),c.follow(...S(e,t)),m(`hardwares/volume`,n)),hide:()=>(l.className=`touch__finger`,c.release()),light:e=>g(e)},T=()=>{y.forEach(clearTimeout),y=[],w.hide()},E=(e,t=!0)=>{T(),v(e,t);for(let[t,n,...r]of Kt[e])d()&&[`show`,`down`].includes(n)||y.push(setTimeout(()=>w[n](...r),t));return qt(Kt[e])},ee=!d()&&!n.has(`light`),D=0,te=0,ne=!1,O=()=>{if(!ee||!ne)return;let e=E(Jt[D],!1);D=(D+1)%Jt.length,te=setTimeout(O,e+1500)},re=()=>{ee=!1,clearTimeout(te),T()};new IntersectionObserver(([e])=>{ne=e.isIntersecting,clearTimeout(te),ne?te=setTimeout(O,600):ee&&T()},{threshold:.5}).observe(s);for(let e of _)e.querySelector(`button`).addEventListener(`click`,()=>{re(),E(e.dataset.gesture)});let k=Ut(),A=0,ie=!1,j=!1,M=!1,ae=0,N={tap:({count:e})=>{v(Yt[e-1]),g(Wt[Yt[e-1]])},holdStart:()=>{v(`rest`),g([[`listening/receiving`]])},holdEnd:()=>g(Wt.rest),slide:({dy:e})=>{M||(M=!0,v(`slide`),p(),ae=t.volume),m(`hardwares/volume`,Xt(ae-e/(s.clientHeight*.6)))},slideEnd:()=>{M=!1,g([[`hardwares/volume`,1500,t.volume],Y])}},P=e=>{e.forEach(e=>N[e.type](e)),k.pending()&&!A?A=setInterval(()=>P(k.tick(performance.now())),40):!k.pending()&&A&&(clearInterval(A),A=0)},oe=(e,t)=>{re(),c.press(e,t),P(k.down(performance.now(),e,t))},F=e=>{c.release(),P(k[e](performance.now()))};s.addEventListener(`pointerdown`,e=>{e.button!==0||j||c.hit(e.clientX,e.clientY)!==`top`||(e.preventDefault(),s.setPointerCapture(e.pointerId),ie=!0,oe(e.clientX,e.clientY))}),s.addEventListener(`pointermove`,e=>{ie?(c.follow(e.clientX,e.clientY),P(k.move(performance.now(),e.clientX,e.clientY))):s.style.cursor=c.hit(e.clientX,e.clientY)===`top`?`pointer`:``});let I=e=>()=>{ie&&(ie=!1,F(e))};s.addEventListener(`pointerup`,I(`up`)),s.addEventListener(`pointercancel`,I(`cancel`));let se=[`Enter`,` `];return s.addEventListener(`keydown`,e=>{e.key===`ArrowUp`||e.key===`ArrowDown`?(e.preventDefault(),re(),v(`slide`),m(`hardwares/volume`,Xt(t.volume+(e.key===`ArrowUp`?.1:-.1))),g([[`hardwares/volume`,1500,t.volume],Y])):se.includes(e.key)&&(e.preventDefault(),e.repeat||j||ie||(j=!0,oe(...S(.5,.5))))}),s.addEventListener(`keyup`,e=>{se.includes(e.key)&&j&&(j=!1,F(`up`))}),s.addEventListener(`blur`,()=>{j&&(j=!1,F(`cancel`))}),c}var Qt={plate:[0,118,0],shell:[0,102,0],mic:[0,14,0],fpc:[0,10,0],topLed:[0,-4,0],logoLed:[0,0,-84],driver:[0,4,-66],radL:[-64,0,0],radR:[64,0,0]},$t={plate:[[100,132],[476,512]],shell:[[112,162],[440,492]],mic:[[160,190],[424,452]],fpc:[[160,190],[424,452]],topLed:[[164,194],[420,448]],logoLed:[[172,204],[414,444]],driver:[[176,210],[410,442]],radL:[[184,220],[404,438]],radR:[[184,220],[404,438]]},en=[[102,128],[486,510]],tn=[0,12],nn=[[48,104],[500,560]],rn=[[224,284],[284,344],[344,404]],an=e=>Math.min(1,Math.max(0,e)),on=(e,[t,n])=>an((e-t)/(n-t)),sn=e=>e*e*(3-2*e),X=(e,t,n)=>sn(on(e,t))*(1-sn(on(e,n)));function cn(e){let t=an(e)*600,n={};for(let[e,[r,i]]of Object.entries($t))n[e]=X(t,r,i);let r={listening:0,thinking:0,speaking:0,say:0},i=rn.map(([e,n],i)=>{let a=[n-8,n];return t>=e&&t<n&&(r.say=i),r.listening+=X(t,[e+2,e+10],[e+12,e+16]),r.thinking+=X(t,[e+12,e+16],[e+20,e+24]),r.speaking+=X(t,[e+20,e+24],a),{user:X(t,[e+2,e+10],a),reply:X(t,[e+20,e+28],a)}});return{lift:t,hint:1-sn(on(t,tn)),focus:X(t,...nn),parts:n,apart:Math.max(...Object.values(n)),leds:X(t,...en),says:i,light:r}}var ln=Math.PI*2,un=Object.freeze([{turn:36,breath:7.5,seed:0},{turn:-53,breath:10.5,seed:1.8},{turn:79,breath:14,seed:3.7}]);function dn(e){return un.map(({turn:t,breath:n,seed:r})=>[e*ln/t,Math.sin(e*ln/n+r),e*ln/(n*1.7)+r,.88+.12*Math.sin(e*ln/n+r+.7)])}var fn=`
  uniform vec4 uCausticLayers[3];
  // Each layer has its own angular drift, radial breath, fold deformation and gain.
  float causticPattern(float r, float angle) {
    float d = r - 1.06;
    float blur = fwidth(r) * 1.2;
    vec4 inner = uCausticLayers[0];
    vec4 middle = uCausticLayers[1];
    vec4 outer = uCausticLayers[2];
    float a = angle + inner.x;
    float b = angle + middle.x;
    float c = angle + outer.x;
    float foldA = sin(a * 6.0 + inner.z) * 0.045
      + sin(a * 11.0 - inner.z * 0.7) * 0.022;
    float foldB = sin(b * 5.0 - middle.z) * 0.085
      + sin(b * 9.0 + middle.z * 0.6) * 0.045;
    float foldC = sin(c * 4.0 + outer.z) * 0.12
      + sin(c * 7.0 - outer.z * 0.5) * 0.055;
    float ridgeA = exp(-pow((d - 0.15 - inner.y * 0.035 - foldA) / (0.055 + blur), 2.0));
    float ridgeB = exp(-pow((d - 0.36 - middle.y * 0.07 - foldB) / (0.09 + blur), 2.0));
    float ridgeC = exp(-pow((d - 0.62 - outer.y * 0.10 - foldC) / (0.17 + blur), 2.0));
    float focusA = 0.62 + 0.38 * sin(a * 9.0 + inner.z);
    float focusB = 0.65 + 0.35 * sin(b * 13.0 + sin(b * 5.0) + middle.z);
    float focusC = 0.72 + 0.28 * sin(c * 8.0 - outer.z);
    float rays = pow(0.5 + 0.5 * sin(b * 19.0 + sin(b * 7.0) * 1.8
      + d * 7.0 + middle.z), 3.0) * exp(-pow((d - 0.32) / 0.38, 2.0));
    float layers = ridgeA * focusA * inner.w * 0.80
      + ridgeB * focusB * middle.w * 0.68
      + ridgeC * focusC * outer.w * 0.46 + rays * 0.14;
    float nearBase = smoothstep(0.86, 1.12, r) * (1.0 - smoothstep(1.7, 2.7, r));
    // Softly bound overlap highlights to retain detail at high base brightness.
    return mix(1.0, 0.67 + 1.35 * (1.0 - exp(-layers * 1.35)), nearBase);
  }
`,pn=[593.1,830.9,1297.2],mn={x:593.1,y:882.8,width:17.3},hn=b.degToRad(-12),gn=.0565,_n=`#716d65`,vn=.1826;function yn(){let e=new v().load(me);e.wrapS=e.wrapT=F,e.anisotropy=8;let t=new x({color:_n,roughness:1,specularIntensity:.2,sheen:.2,sheenRoughness:.5,sheenColor:`#f7d9c4`});return t.onBeforeCompile=t=>{Object.assign(t.uniforms,{uWeave:{value:e},uTile:{value:vn},uRelief:{value:.4}}),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vAt;
varying vec3 vFacing;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vAt = position;
vFacing = normal;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
        varying vec3 vAt;
        varying vec3 vFacing;
        uniform sampler2D uWeave;
        uniform float uTile, uRelief;
        // x: tone, 1 on average; y: height
        vec2 weave() {
          vec3 w = pow(abs(normalize(vFacing)), vec3(4.0));
          w /= w.x + w.y + w.z;
          vec3 p = vAt / uTile;
          return texture2D(uWeave, p.zy).rg * w.x + texture2D(uWeave, p.xz).rg * w.y + texture2D(uWeave, p.xy).rg * w.z;
        }
        // three's perturbNormalArb (bumpmap_pars_fragment), which is only there with a bump map on the mesh's UVs
        vec3 relief(vec3 at, vec3 n, vec2 dH, float faceDirection) {
          vec3 sx = normalize(dFdx(at)), sy = normalize(dFdy(at));
          vec3 r1 = cross(sy, n), r2 = cross(n, sx);
          float det = dot(sx, r1) * faceDirection;
          return normalize(abs(det) * n - sign(det) * (dH.x * r1 + dH.y * r2));
        }`).replace(`#include <map_fragment>`,`#include <map_fragment>
diffuseColor.rgb *= pow(weave().x * 2.0, 1.6);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        float height = weave().y;
        normal = relief(-vViewPosition, normal, vec2(dFdx(height), dFdy(height)) * uRelief, faceDirection);`)},t}var Z={a:[1,.86,.66],b:[1,.7,.42],floor:.88,field:.16},bn={palettes:[[`#ffc98a`,`#fff0d9`],[`#ffbf94`,`#ffe9d6`],[`#ffd28f`,`#fff4de`]],floor:.35,field:.6};function xn(){return new L({uniforms:{uTime:{value:0},uDiffusion:{value:.375/.545},uWeights:{value:[1,0,0,0,0,0,0,0]},uColorA:{value:new h().setRGB(...Z.a)},uColorB:{value:new h().setRGB(...Z.b)},uUpdateAngle:{value:0},uFillProgress:{value:0},uFillGain:{value:0},uFloor:{value:Z.floor},uField:{value:Z.field},uGain:{value:1}},vertexShader:`
      varying vec2 vTop;
      void main() {
        vTop = position.xz / ${gn.toFixed(4)};
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform float uFloor, uField, uGain;
      varying vec2 vTop;
      ${I}
      void main() {
        float edge = pow(pow(abs(vTop.x), 4.2) + pow(abs(vTop.y), 4.2), 1.0 / 4.2);
        // An even warm white with the field drifting faintly over it (as the image: 0.99, 0.86, 0.67 in linear light).
        gl_FragColor = vec4(uGain * (uField * topField(vTop) + uColorA * uFloor) * (1.0 - 0.3 * smoothstep(0.7, 1.02, edge)), 1.0);
        #include <colorspace_fragment>
      }`})}var Sn=`
  uniform vec3 uRing;
  uniform float uYaw, uTime;
  ${fn}
  // q: a point of the table (world x, z; the speaker stands on the origin); toEye: the way from it to the camera, along
  // the table. Before the marble's own tone.
  vec3 tableLight(vec2 q, vec2 toEye) {
    // In the speaker's own frame.
    float c = cos(uYaw), s = sin(uYaw);
    vec2 p = vec2(c * q.x - s * q.y, s * q.x + c * q.y) / 0.05244;
    float r = pow(pow(abs(p.x), 4.2) + pow(abs(p.y), 4.2), 1.0 / 4.2), angle = atan(p.y, p.x);
    float wobble = sin(angle * 3.0 + uTime * 0.22) * 0.018;
    float ring = exp(-pow((r - 1.58 - wobble) / 0.24, 2.0));
    float halo = exp(-pow(r - 1.06, 2.0));
    float out_ = smoothstep(0.78, 1.16, r);
    float scattered = (ring * 0.26 + halo * 0.18) * out_ * 2.2 * causticPattern(r, angle);
    // The glass's wall is 46 mm from the axis.
    float wall = r * 0.05244 - 0.046;
    float wide = 0.36 * exp(-max(wall, 0.0) / 0.065) * out_;
    float under = (1.0 - out_) * 1.3 * (0.35 + 0.65 * smoothstep(0.0, 0.005, abs(wall)));
    // By where the point is, not which way it lies from the axis: that flips across the middle of the base.
    float side = smoothstep(-0.05, 0.06, dot(q, normalize(vec2(-1.0, 0.15))));
    float ahead = dot(q, toEye), aside = abs(dot(q, vec2(-toEye.y, toEye.x)));
    float mirror = smoothstep(0.02, 0.06, ahead) * exp(-max(ahead - 0.06, 0.0) / 0.035) * (1.0 - smoothstep(0.03, 0.062, aside));
    return uRing * vec3(1.5, 0.7, 0.15) * (scattered * (0.4 + 0.6 * side) + (wide + under + 0.8 * mirror) * (0.04 + 0.96 * side));
  }`;function Cn(e,t,n,r){return new L({uniforms:{hero:e,table:{value:t},uRing:n,uYaw:{value:hn},...r,uTint:{value:new h(`#eef4f2`)}},vertexShader:`
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform mat4 hero;
      uniform sampler2D table;
      uniform vec3 uTint;
      varying vec3 vWorld;
      varying vec3 vNormal;
      ${Sn}
      void main() {
        vec3 n = normalize(vNormal), view = normalize(vWorld - cameraPosition);
        float facing = clamp(dot(n, -view), 0.0, 1.0);
        float left = 1.0 - smoothstep(-0.04, 0.06, dot(vWorld.xz, vec2(0.99, -0.15)));
        vec3 ray = refract(view, n, 1.0 / 1.45);
        vec3 down = vWorld + ray * min(ray.y < -0.02 ? vWorld.y / -ray.y : 0.05, 0.05);
        vec4 at = hero * vec4(down.x, 0.0, down.z, 1.0);
        vec3 marble = texture2D(table, at.xy / at.w * 0.5 + 0.5).rgb;
        // Less of the lit table shows low in the wall, where the ray comes down just behind it, than higher up.
        vec3 seen = marble * (0.2 + 0.8 * left) + 0.8 * mix(0.5, 1.0, smoothstep(0.004, 0.02, vWorld.y))
          * tableLight(down.xz, normalize(cameraPosition.xz - down.xz)) * (0.35 + 4.0 * dot(marble, vec3(0.3, 0.6, 0.1)));
        float rim = pow(1.0 - facing, 4.0);
        float turn = smoothstep(0.08, 0.3, length(fwidth(n))); // real edges, not the CAD's facets
        float lip = smoothstep(0.017, 0.023, vWorld.y);
        vec3 glow = uRing * vec3(1.35, 0.85, 0.35) * (0.03 + 0.6 * left) * (0.06 + 0.7 * rim + 0.7 * turn)
          + uRing * vec3(1.2, 1.0, 0.8) * (0.05 + 0.5 * left) * 0.6 * lip; // the band under the lip, nearest the LEDs: whiter
        gl_FragColor = vec4(seen * uTint * (1.0 - 0.6 * rim) + glow, 1.0);
        #include <colorspace_fragment>
      }`})}function wn(){let[e,t]=k.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).slice(1).map(Number),n=document.createElement(`canvas`);n.width=(e+8)*6,n.height=(t+8)*6;let r=n.getContext(`2d`);r.scale(6,6),r.translate(4,4),r.fillStyle=`#fff`,r.fill(new Path2D(k.match(/ d="([^"]+)"/)[1]),`evenodd`);let i=mn.width/e,a=new N(new M((e+8)*i*j,(t+8)*i*j),new f({color:new h().setRGB(.85,.8,.72),alphaMap:new l(n),transparent:!0}));return a.position.set(mn.x*j,mn.y*j,1232.05*j),a.rotation.y=Math.PI,a}function Tn({hero:e,table:t,ring:n,scatter:r},i){let a=new m;a.rotation.y=Math.PI+hn;let o=xn(),s=o.uniforms,l=new h().setRGB(...Z.a),u=new h().setRGB(...Z.b),d=bn.palettes.map(e=>e.map(e=>new h(e))),f={value:0},p=null,g=[],_=null;return new E().load(oe.speakerCad,s=>{let l=s.scene;l.updateMatrixWorld(!0);let u=w(),d=O(l.children.find(e=>e.children.length>10),u),m=Object.fromEntries(d.shell.map(e=>[e.userData.piece,e]));m.fabric.material=yn(),m.plate.material=o;let h=m.housing.geometry.boundingBox.min.y+.0235;u.housing.transparent=!1,u.housing.onBeforeCompile=e=>{e.uniforms.uHem={value:h},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vHeight;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vHeight = position.y;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vHeight;
uniform float uHem;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
if (vHeight < uHem) discard;`)},m.logoWindow.visible=!1;let v=Cn(e,t,n,r),y=new x({color:`#000000`,roughness:.08,envMapIntensity:.5,transparent:!0,blending:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),b=[];for(let e of d.base)e.traverse(e=>e.isMesh&&b.push(e));for(let e of b)e.material=v,e.add(new N(e.geometry,y));for(let e of[m.fabric,m.plate,...b])e.castShadow=!0;let S=wn();l.add(S),l.updateMatrixWorld(!0),m.fabric.parent.attach(S);let C={...d,plate:[m.plate],shell:[m.housing,m.logoWindow,m.fabric,S]};for(let e of d.foot??[])e.visible=!1;g=Object.entries(d).filter(([e])=>![`shell`,`base`,`foot`].includes(e)).flatMap(([,e])=>e);for(let e of g)e.visible=!1;_=u.led,_.emissiveIntensity=2.4,_.onBeforeCompile=e=>{e.uniforms.uLit=f,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vAxis;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vAxis = (modelMatrix * vec4(transformed, 1.0)).xz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vAxis;
uniform float uLit;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
            float turn = 0.6 * fract((atan(vAxis.y, vAxis.x) + 0.1) / 6.2832 + 0.5) + 0.4 * clamp(length(vAxis) / 0.06, 0.0, 1.0);
            totalEmissiveRadiance *= smoothstep(turn * 0.67, turn * 0.67 + 0.33, uLit);`)};let T=new Map(Object.values(C).flat().map(e=>[e,e.position.clone()])),E=new c;p=e=>{for(let[t,n]of Object.entries(Qt)){E.fromArray(n).multiplyScalar(j*(e[t]??0));for(let e of C[t]??[])e.position.copy(T.get(e)).add(E)}},l.position.set(-pn[0]*j,-pn[1]*j,-pn[2]*j),a.add(l),i()},void 0,e=>console.error(`[l2] the speaker CAD could not be loaded; the room shows without it.`,e)),{group:a,light:s.uColorA,update(e,t){if(s.uTime.value=.36/(.65*.55)*e,!p||!t)return;p(t.parts);let n=t.parts.shell>.001||t.parts.plate>.001;for(let e of g)e.visible=n;let{listening:r,thinking:i,speaking:a,say:o}=t.light,c=r+i+a,m=1-c,[h,v]=d[o];Object.assign(s.uWeights.value,{0:m,2:r,3:i,5:a}),s.uColorA.value.copy(l).lerp(h,c),s.uColorB.value.copy(u).lerp(v,c),s.uFloor.value=Z.floor*m+bn.floor*c,s.uField.value=Z.field*m+bn.field*c,s.uGain.value=1-.6*t.parts.plate,_.emissive.copy(s.uColorA.value),f.value=t.leds}}}var En=850.5,Dn=656,On=179,kn=.865,An=3,jn=`"Helvetica Neue", Helvetica, Arial, sans-serif`;function Mn(e){let[t,n]=e.map(e=>e.textContent.trim().toUpperCase()),r=document.createElement(`canvas`),i=r.getContext(`2d`),a=e=>`700 ${e}px ${jn}`,o=e=>{i.font=a(e),i.letterSpacing=`${-.02*e}px`,i.textBaseline=`alphabetic`,i.textAlign=`center`,i.fillStyle=`#fff`,i.shadowColor=`rgb(30 18 8 / 0.5)`,i.shadowBlur=36,i.shadowOffsetY=An};o(100);let s=(e,t)=>100*t*An/i.measureText(e).width,c=s(n,Dn),l=s(t,kn*Dn);o(c);let u=i.measureText(`H`).actualBoundingBoxAscent;o(l);let d=i.measureText(`H`).actualBoundingBoxAscent,f=Math.ceil(c*.06+36),p=f+d+u*1.2;return r.width=Math.ceil(Dn*An)+2*f,r.height=Math.ceil(p+c*.05)+f,o(l),i.fillText(t,r.width/2,f+d),o(c),i.fillText(n,r.width/2,p),{canvas:r,rect:[En-r.width/An/2,On-p/An,r.width/An,r.height/An]}}function Nn(e,t,n){let{canvas:r,rect:i}=Mn(e),a=new l(r);a.anisotropy=8;let o=new L({uniforms:{map:{value:a},uLight:t,uTop:{value:n},uInk:{value:new h().setRGB(.96,.92,.86)}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vFacing;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vUv = uv;
        vWorld = world.xyz;
        vFacing = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform sampler2D map;
      uniform vec3 uLight, uTop, uInk;
      varying vec2 vUv;
      varying vec3 vWorld;
      varying vec3 vFacing;
      void main() {
        // Cream letters in the room's dim light, and on them the light of the speaker's top: it falls off with the
        // square of the distance (full within 0.15 m, the letters just above it) and with the angle it arrives at.
        // At most a little over white, so the nearest letters glow faintly without losing their edges to the bloom.
        vec3 toTop = uTop - vWorld;
        float lit = 0.0225 / dot(toTop, toTop) * max(dot(normalize(toTop), normalize(vFacing)), 0.0);
        vec4 drawn = texture2D(map, vUv); // white letters over their dark shadow
        gl_FragColor = vec4(uInk * (0.82 + 0.34 * uLight * min(lit, 1.0)) * drawn.rgb, drawn.a);
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1});return{mesh:new N(new M(1,1),o),rect:i}}var Pn={frame:[1701,925],far:[-335,-216,2411,1141],props:[0,-150,1701,1075]},Fn=`/openhome/assets/far-BsO_Thj8.webp`,In=`/openhome/assets/sofa-Dh_EfP0W.webp`,Ln=`/openhome/assets/table-DsuEhyTs.webp`,Rn=`/openhome/assets/props-CNwp8SD2.webp`,Q=Pn.frame,zn=2362.5,Bn=[852.34,529.42],Vn=new c(0,.24036,.87437),$=new c(0,.0704,0),Hn=[1.5,.75],Un=5,Wn=.038,Gn=2.2,Kn=[.62,.45,.28];function qn(e,[t,n,r,i],a=.05,o=40){let s=a/zn;return e.makePerspective((t-Bn[0])*s,(t+r-Bn[0])*s,(Bn[1]-n)*s,(Bn[1]-n-i)*s,a,o)}var Jn=`
  uniform mat4 hero;
  varying vec4 vHero;
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vHero = hero * world;
    gl_Position = projectionMatrix * viewMatrix * world;
  }`,Yn=`
  uniform sampler2D map;
  uniform vec4 rect; // where the layer's image sits in the frame: [left, bottom, width, height], the frame being 0–1
  uniform float uDim, uSoft; // the room stepping back while the speaker is apart: darker, and softer by mip levels
  varying vec4 vHero;
  void main() {
    if (vHero.w <= 0.0) discard; // behind the hero camera
    gl_FragColor = texture2D(map, (vHero.xy / vHero.w * 0.5 + 0.5 - rect.xy) / rect.zw, uSoft);
    gl_FragColor.rgb *= uDim;
    #include <colorspace_fragment>
  }`;function Xn(e){let t=new A;t.background=new h(`#17120e`);let n=(e,n,r,i,a)=>{let o=new N(new M(r,i),new f({color:new h(e).multiplyScalar(n),side:2}));o.position.set(...a),o.lookAt($),t.add(o)};n(`#ffc48a`,16,.9,.5,[-1.2,1.3,-2.2]),n(`#ffb070`,5,1.8,1.1,[-2.6,.7,-1.4]),n(`#ffa24f`,6,.3,.25,[-.9,.12,.15]),n(`#8fb0ff`,2.5,2.6,1.7,[2.7,1,-2.6]),n(`#ffd9a8`,22,.07,.7,[-1,.35,.8]),n(`#bcd0ff`,4,.06,.9,[1.3,.4,.25]);let r=new R(e),i=r.fromScene(t,.03).texture;return r.dispose(),i}function Zn(e,t,n,r){let i=new L({uniforms:{hero:e,table:{value:t},uRing:n,uYaw:{value:hn},...r},vertexShader:Jn,fragmentShader:`
      uniform sampler2D table;
      varying vec4 vHero;
      varying vec3 vWorld;
      ${Sn}
      void main() {
        vec4 marble = texture2D(table, vHero.xy / vHero.w * 0.5 + 0.5);
        vec3 light = tableLight(vWorld.xz, normalize(cameraPosition.xz - vWorld.xz));
        gl_FragColor = vec4(light * (0.35 + 4.0 * dot(marble.rgb, vec3(0.3, 0.6, 0.1))) * marble.a, 1.0);
        #include <colorspace_fragment>
      }`,transparent:!0,blending:2,depthWrite:!1}),a=new N(new M(.8,.8).rotateX(-Math.PI/2),i);return a.position.y=6e-4,a}function Qn(e,t){let n=new D({opacity:.8,depthWrite:!1});n.onBeforeCompile=n=>{Object.assign(n.uniforms,{hero:e,table:{value:t}}),n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
uniform mat4 hero;
varying vec4 vHero;`).replace(`#include <shadowmap_vertex>`,`#include <shadowmap_vertex>
vHero = hero * worldPosition;`),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D table;
varying vec4 vHero;`).replace(`#include <tonemapping_fragment>`,`gl_FragColor.a *= texture2D(table, vHero.xy / vHero.w * 0.5 + 0.5).a;
#include <tonemapping_fragment>`)};let r=new N(new M(1.2,1.2).rotateX(-Math.PI/2),n);return r.position.y=3e-4,r.receiveShadow=!0,r}function $n(e,t,n){let r=new URLSearchParams(location.search),i=new T({canvas:e});i.setPixelRatio(Math.min(devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=3;let a=new A,o=new se;o.position.copy(Vn),o.lookAt($),o.updateMatrixWorld();let l={value:qn(new p,[0,0,...Q]).multiply(o.matrixWorldInverse)},d=$.clone().sub(Vn).normalize(),f=o.quaternion.clone(),m=new c(1,0,0).applyQuaternion(f),y=new c(0,1,0).applyQuaternion(f);function x(e,[t,n,r,i],a){let o=a/zn;e.scale.set(r*o,i*o,1),e.quaternion.copy(f),e.position.copy(Vn).addScaledVector(d,a).addScaledVector(m,(t+r/2-Bn[0])*o).addScaledVector(y,(Bn[1]-n-i/2)*o)}let S=new ne(i,new re(1,1,{type:_,samples:4}));S.addPass(new ie(a,o)),S.addPass(new ae(new u(1,1),.3,.5,1)),S.addPass(new te);let w=0,E=()=>w||=requestAnimationFrame(we),D=new v,O={uDim:{value:1},uSoft:{value:0}};function k(e,t,[n,r,o,s],c){let u=D.load(t,E);u.colorSpace=ee,u.anisotropy=i.capabilities.getMaxAnisotropy();let d={value:new g(n/Q[0],1-(r+s)/Q[1],o/Q[0],s/Q[1])},f=new L({uniforms:{map:{value:u},hero:l,rect:d,...O},vertexShader:Jn,fragmentShader:Yn,transparent:e>0,depthWrite:!1}),p=new N(c,f);return p.renderOrder=e,a.add(p),p}let j=(e,t)=>(e.position.copy(Vn).addScaledVector(d,t),e.lookAt(Vn)),oe=[0,0,...Q];j(k(0,Fn,Pn.far,new M(12,8)),4.5),j(k(1,In,oe,new M(6,4)),1.5);let F=k(2,Ln,oe,new M(3,2.2).rotateX(-Math.PI/2));F.position.z=-.5,k(3,Rn,Pn.props,new M(3,2)).position.set(0,.6,-.03);let I=null,R=null,z=null,B=null,V=null,H={uTime:{value:0},uCausticLayers:{value:dn(0).map(e=>new g(...e))}},de=1.02;if(!r.has(`empty`)){let e={value:new h().setRGB(...Kn)},n=F.material.uniforms.map.value;a.environment=Xn(i);let r=new ce(`#ffb878`,2.5,3,.5,1,2);r.position.set(-.62,.3,-.3),r.target.position.copy($),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=.2,r.shadow.camera.far=2,r.shadow.radius=8,r.shadow.blurSamples=16,r.shadow.bias=-5e-4;let o=new s(`#b9c9f0`,4);o.position.set(1.2,.5,-.5),o.target.position.copy($);let u=new P(`#ffab70`,.68,3,2);u.position.set(-.36,.3,.04);let d=new P(`#ffc5a3`,.03,3,2);d.position.set(-.3,.15,.3);let f=new P(`#ff9a50`,.006,.5,2);f.position.set(-.03,.004,.16),a.add(u,d,f,new le(`#ffe4c8`,`#3a2c22`,.08));let p=new P(`#ffd6a4`,.05,.4,2);p.position.set(0,.185,0);let m=Qn(l,n),g=Zn(l,n,e,H);if(m.renderOrder=g.renderOrder=2.5,a.add(r,r.target,o,o.target,p,m,g),R=new s(`#fff1e0`,0),R.position.set(-.3,.8,.9),R.target.position.copy($),a.add(R,R.target),I=Tn({hero:l,table:n,ring:e,scatter:H},E),a.add(I.group),t){let{mesh:e,rect:n}=Nn([...t.children],I.light,new c(0,.1408,0));x(e,n,de),e.renderOrder=3.5,a.add(e),z=e,B=e.position.clone(),V=n}}let fe=r.has(`yaw`)||r.has(`pitch`)||r.has(`p`),me=matchMedia(`(prefers-reduced-motion: reduce)`).matches,he=fe||me,U={yaw:Number(r.get(`yaw`))||0,pitch:Number(r.get(`pitch`))||0},W={...U},G=new C().setFromVector3(Vn.clone().sub($)),ge=new C,_e=null,ve=0,ye=1,K=[0,0,...Q],be=0,xe=new c,Se=new c,q=new c;function Ce(t,n,r){return Se.set(t,n,r).project(o),[(Se.x+1)/2*e.clientWidth,(1-Se.y)/2*e.clientHeight]}function we(e){w=0,U.yaw+=(W.yaw-U.yaw)*.08,U.pitch+=(W.pitch-U.pitch)*.08;let t=_e?.focus??0;qn(o.projectionMatrix,[K[0],K[1]+(be-K[1])*(1-t),K[2],K[3]]),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),ge.set(G.radius,G.phi-b.degToRad(U.pitch+Un*t),G.theta+b.degToRad(U.yaw)),o.position.setFromSpherical(ge).add($),o.lookAt(xe.copy($).setY($.y+Wn*t)),O.uDim.value=1-.5800000000000001*t,O.uSoft.value=Gn*t,R&&(R.intensity=1.4*(_e?.apart??0)),z&&(z.position.copy(B).addScaledVector(y,ve/ye*(de/zn)),z.visible=ve/ye<Q[1]);let r=he?0:e/1e3;if(H.uTime.value=r,dn(r).forEach((e,t)=>H.uCausticLayers.value[t].fromArray(e)),I?.update(r,_e),S.render(),n&&(n.style.visibility=z?.visible?`visible`:`hidden`,z)){let[e,t]=Ce(...q.set(0,-.5,0).applyMatrix4(z.matrixWorld));n.style.transform=`translate(${e}px, ${t}px) translateX(-50%)`}(I?.group.children.length&&!me||Math.abs(W.yaw-U.yaw)+Math.abs(W.pitch-U.pitch)>.001)&&E()}return new ResizeObserver(()=>{let{clientWidth:t,clientHeight:r}=e;if(!t||!r)return;i.setSize(t,r,!1),S.setPixelRatio(i.getPixelRatio()),S.setSize(t,r),ye=Math.max(t/Q[0],r/Q[1]),K=ue(Q,t,r);let{fit:a,under:o,lift:s,top:c}=pe(Q,t,r,-Pn.props[1]-10);if(be=c,n?.style.setProperty(`--k`,ye*o),z){let[e,t,n,r]=V;x(z,[e+n*(1-a)/2,328-(328-t)*a-s,n*a,r*a],de),B.copy(z.position)}E()}).observe(e),he||addEventListener(`pointermove`,e=>{W.yaw=(e.clientX/innerWidth-.5)*2*Hn[0],W.pitch=(.5-e.clientY/innerHeight)*2*Hn[1],E()}),{set(e,t){_e=e,ve=t,E()},where:Ce}}function er(e){let t=e.querySelector(`.l2-hero__stage`),n=t.querySelector(`.l2-hero__scroll`),r=[...t.querySelectorAll(`.l2-say`)].map(e=>[e.querySelector(`.l2-say__user`),e.querySelector(`.l2-say__reply`)]),i=$n(t.querySelector(`.l2-hero__frame`),t.querySelector(`.l2-hero__title`),t.querySelector(`.l2-hero__lead`)),a=new URLSearchParams(location.search),o=a.has(`p`)?Number(a.get(`p`)):null,s=()=>{let t=e.getBoundingClientRect(),n=t.height-innerHeight;return n>0?Math.min(1,Math.max(0,-t.top/n)):0},c=(e,t)=>{e.style.opacity=t,e.style.transform=`translateY(${(1-t)*12}px)`},l=o??s(),u=performance.now(),d=0,f=()=>d||=requestAnimationFrame(p);function p(e){d=0;let a=o??s(),p=Math.min(.1,(e-u)/1e3);u=e,l=Math.abs(a-l)<1e-4?a:l+(a-l)*(1-Math.exp(-p*10));let m=cn(l);i.set(m,a*600*innerHeight/100),n.style.opacity=m.hint,t.style.setProperty(`--left`,`${i.where(-.15,.1,0)[0]}px`),t.style.setProperty(`--right`,`${i.where(.15,.1,0)[0]}px`),r.forEach(([e,t],n)=>{c(e,m.says[n].user),c(t,m.says[n].reply)}),l!==a&&f()}addEventListener(`scroll`,f,{passive:!0}),addEventListener(`resize`,f),f()}var tr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221 39" fill="currentColor">
  <path fill-rule="evenodd" d="M19.2545 38.6603C27.7535 38.6603 34.947 33.0986 37.3947 25.4155V38.6603C37.4627 38.6603 37.5443 38.6603 37.6123 38.6603C45.2409 38.6603 51.8225 34.1729 54.855 27.7001C57.8874 34.1729 64.469 38.6603 72.0977 38.6603C72.1249 38.6603 72.1521 38.6603 72.1793 38.6603C72.2337 38.6603 72.2745 38.6603 72.3288 38.6603V0.584961C72.2609 0.584961 72.1793 0.584961 72.1113 0.584961C64.4826 0.584961 57.901 5.07242 54.8686 11.5452C51.8225 5.07242 45.2545 0.584961 37.6259 0.584961C37.5443 0.584961 37.4763 0.584961 37.4083 0.584961V13.8298C34.947 6.14669 27.7535 0.584961 19.2545 0.584961C8.74296 0.584961 0.216797 9.11113 0.216797 19.6227C0.216797 30.1342 8.74296 38.6603 19.2545 38.6603Z"/>
  <path d="M97.7856 25.8241C96.4257 25.8241 95.1883 25.593 94.0596 25.117C92.9309 24.6411 91.9655 23.9884 91.1496 23.1317C90.3473 22.275 89.7353 21.2959 89.3002 20.1944C88.865 19.0658 88.6475 17.8691 88.6475 16.6044C88.6475 15.3398 88.865 14.116 89.3002 13.0145C89.7353 11.913 90.3473 10.9339 91.1496 10.0772C91.9655 9.22054 92.9309 8.56782 94.0596 8.09188C95.1883 7.61594 96.4257 7.38477 97.7856 7.38477C99.1454 7.38477 100.383 7.61594 101.511 8.09188C102.64 8.56782 103.592 9.22054 104.394 10.0772C105.21 10.9339 105.836 11.913 106.271 13.0145C106.706 14.116 106.924 15.3126 106.924 16.6044C106.924 17.8963 106.706 19.0658 106.271 20.1944C105.836 21.2959 105.21 22.275 104.394 23.1317C103.592 23.9884 102.64 24.6411 101.511 25.117C100.383 25.593 99.1454 25.8241 97.7856 25.8241ZM97.7856 23.8388C99.2542 23.8388 100.519 23.526 101.566 22.8869C102.64 22.2342 103.456 21.3639 104.014 20.276C104.598 19.1745 104.884 17.9507 104.884 16.6044C104.884 15.2582 104.598 14.0208 104.014 12.9329C103.456 11.845 102.64 10.9883 101.566 10.3492C100.519 9.69649 99.2542 9.37012 97.7856 9.37012C96.3169 9.37012 95.0795 9.69649 94.0052 10.3492C92.9309 10.9883 92.115 11.845 91.5303 12.9329C90.9728 14.0208 90.6872 15.2446 90.6872 16.6044C90.6872 17.9643 90.9728 19.1745 91.5303 20.276C92.115 21.3639 92.9309 22.2342 94.0052 22.8869C95.0795 23.526 96.3305 23.8388 97.7856 23.8388Z"/>
  <path d="M108.799 30.9919V12.0086H110.839V14.1843C111.342 13.4364 111.994 12.8653 112.797 12.4437C113.613 12.0086 114.578 11.791 115.707 11.791C117.026 11.791 118.182 12.1038 119.161 12.7429C120.153 13.3548 120.929 14.1979 121.472 15.2722C122.016 16.3193 122.288 17.5023 122.288 18.8078C122.288 20.1132 122.016 21.2691 121.472 22.3433C120.929 23.4176 120.153 24.2607 119.161 24.8998C118.182 25.5118 117.026 25.8245 115.707 25.8245C114.578 25.8245 113.613 25.6069 112.797 25.1718C111.994 24.723 111.342 24.1247 110.839 23.404V30.9919H108.799ZM115.435 23.9751C116.455 23.9751 117.311 23.744 118.019 23.268C118.739 22.7921 119.297 22.1666 119.678 21.3915C120.058 20.5891 120.249 19.7325 120.249 18.8078C120.249 17.8831 120.058 16.9992 119.678 16.2241C119.297 15.449 118.739 14.8234 118.019 14.3475C117.311 13.8716 116.455 13.6404 115.435 13.6404C114.415 13.6404 113.585 13.8716 112.878 14.3475C112.171 14.8234 111.641 15.449 111.274 16.2241C110.907 16.9992 110.73 17.8695 110.73 18.8078C110.73 19.7461 110.907 20.5891 111.274 21.3915C111.641 22.1666 112.171 22.7921 112.878 23.268C113.585 23.744 114.442 23.9751 115.435 23.9751Z"/>
  <path d="M130.067 25.8245C128.694 25.8245 127.484 25.5118 126.45 24.8998C125.417 24.2607 124.614 23.4176 124.03 22.3433C123.472 21.2691 123.187 20.0996 123.187 18.8078C123.187 17.5159 123.458 16.3193 124.002 15.2722C124.546 14.1979 125.321 13.3548 126.341 12.7429C127.361 12.1038 128.558 11.791 129.931 11.791C131.305 11.791 132.529 12.1038 133.521 12.7429C134.541 13.3548 135.316 14.1979 135.86 15.2722C136.404 16.3193 136.676 17.5023 136.676 18.8078V19.6237H125.281C125.389 20.426 125.648 21.1603 126.042 21.8266C126.464 22.4793 127.008 23.0097 127.701 23.404C128.395 23.7848 129.183 23.9751 130.094 23.9751C131.06 23.9751 131.862 23.7712 132.515 23.3496C133.168 22.9145 133.671 22.3569 134.038 21.6906H136.268C135.792 22.9009 135.044 23.9071 134.011 24.6823C132.991 25.4438 131.685 25.8245 130.067 25.8245ZM125.308 17.7199H134.555C134.378 16.564 133.888 15.585 133.086 14.8098C132.284 14.0347 131.237 13.6404 129.931 13.6404C128.626 13.6404 127.579 14.0347 126.776 14.8098C126.001 15.585 125.512 16.564 125.308 17.7199Z"/>
  <path d="M138.214 25.6069V12.0086H140.254V14.1299C140.743 13.4772 141.341 12.9197 142.049 12.4709C142.756 12.0222 143.667 11.791 144.768 11.791C145.707 11.791 146.59 12.0222 147.406 12.4709C148.236 12.9061 148.916 13.5724 149.419 14.4563C149.949 15.3266 150.208 16.4009 150.208 17.6927V25.6069H148.168V17.7471C148.168 16.5096 147.814 15.5306 147.107 14.7827C146.4 14.0211 145.489 13.6404 144.36 13.6404C143.599 13.6404 142.905 13.8172 142.293 14.1571C141.681 14.4971 141.178 14.9866 140.798 15.6258C140.43 16.2377 140.254 16.9584 140.254 17.7743V25.6069H138.214Z"/>
  <path d="M153.103 25.6068V7.60254H155.142V15.5984H165.613V7.60254H167.653V25.6068H165.613V17.5837H155.142V25.6068H153.103Z"/>
  <path d="M176.588 25.8245C175.214 25.8245 174.017 25.5118 172.998 24.8998C171.978 24.2607 171.203 23.4176 170.659 22.3433C170.115 21.2691 169.843 20.0996 169.843 18.8078C169.843 17.5159 170.115 16.3193 170.659 15.2722C171.203 14.1979 171.978 13.3548 172.998 12.7429C174.017 12.1038 175.214 11.791 176.588 11.791C177.961 11.791 179.185 12.1038 180.178 12.7429C181.197 13.3548 181.973 14.1979 182.516 15.2722C183.06 16.3193 183.332 17.5023 183.332 18.8078C183.332 20.1132 183.06 21.2691 182.516 22.3433C181.973 23.4176 181.197 24.2607 180.178 24.8998C179.185 25.5118 177.988 25.8245 176.588 25.8245ZM176.588 23.9751C177.607 23.9751 178.451 23.744 179.144 23.268C179.851 22.7921 180.381 22.1666 180.749 21.3915C181.116 20.5891 181.293 19.7325 181.293 18.8078C181.293 17.8831 181.116 16.9992 180.749 16.2241C180.381 15.449 179.851 14.8234 179.144 14.3475C178.451 13.8716 177.607 13.6404 176.588 13.6404C175.568 13.6404 174.738 13.8716 174.031 14.3475C173.324 14.8234 172.794 15.449 172.426 16.2241C172.059 16.9992 171.883 17.8695 171.883 18.8078C171.883 19.7461 172.059 20.5891 172.426 21.3915C172.794 22.1666 173.324 22.7921 174.031 23.268C174.738 23.744 175.595 23.9751 176.588 23.9751Z"/>
  <path d="M185.073 25.6069V12.0086H187.113V14.0755C187.426 13.5316 187.915 13.0149 188.582 12.5253C189.248 12.0358 190.145 11.791 191.247 11.791C192.158 11.791 192.987 12.0358 193.749 12.5253C194.524 13.0013 195.136 13.6676 195.571 14.5379C195.748 14.2251 196.034 13.858 196.414 13.4228C196.809 12.9877 197.325 12.6069 197.964 12.2806C198.604 11.9542 199.365 11.791 200.249 11.791C201.133 11.791 201.935 12.0222 202.697 12.4709C203.458 12.9197 204.07 13.5724 204.546 14.4291C205.036 15.2586 205.28 16.2513 205.28 17.3935V25.6069H203.241V17.4479C203.241 16.3057 202.914 15.3946 202.262 14.7011C201.622 13.9939 200.834 13.6404 199.868 13.6404C198.903 13.6404 198.005 13.9804 197.285 14.6467C196.564 15.313 196.197 16.2649 196.197 17.4751V25.6069H194.157V17.4479C194.157 16.3057 193.831 15.3946 193.178 14.7011C192.539 13.9939 191.75 13.6404 190.785 13.6404C189.819 13.6404 188.922 13.9804 188.201 14.6467C187.48 15.313 187.113 16.2649 187.113 17.4751V25.6069H185.073Z"/>
  <path d="M213.779 25.8245C212.406 25.8245 211.196 25.5118 210.162 24.8998C209.129 24.2607 208.326 23.4176 207.742 22.3433C207.184 21.2691 206.898 20.0996 206.898 18.8078C206.898 17.5159 207.17 16.3193 207.714 15.2722C208.258 14.1979 209.033 13.3548 210.053 12.7429C211.073 12.1038 212.27 11.791 213.643 11.791C215.017 11.791 216.24 12.1038 217.233 12.7429C218.253 13.3548 219.028 14.1979 219.572 15.2722C220.116 16.3193 220.388 17.5023 220.388 18.8078V19.6237H208.993C209.101 20.426 209.36 21.1603 209.754 21.8266C210.176 22.4793 210.72 23.0097 211.413 23.404C212.107 23.7848 212.895 23.9751 213.806 23.9751C214.772 23.9751 215.574 23.7712 216.227 23.3496C216.88 22.9145 217.383 22.3569 217.75 21.6906H219.98C219.504 22.9009 218.756 23.9071 217.723 24.6823C216.703 25.4438 215.397 25.8245 213.779 25.8245ZM209.02 17.7199H218.267C218.09 16.564 217.6 15.585 216.798 14.8098C215.996 14.0347 214.949 13.6404 213.643 13.6404C212.338 13.6404 211.291 14.0347 210.488 14.8098C209.713 15.585 209.224 16.564 209.02 17.7199Z"/>
</svg>
`,nr=`.l2-hero, [data-dark]`;function rr(e){e.querySelector(`.l2-nav__logo`)?.insertAdjacentHTML(`afterbegin`,tr.replace(`<svg`,`<svg aria-hidden="true" focusable="false"`));let t=[...document.querySelectorAll(`main > section`)],n=!1,r=()=>{n=!1;let r=e.getBoundingClientRect(),i=r.top+r.height/2,a=t.find(e=>{let t=e.getBoundingClientRect();return t.top<=i&&t.bottom>i});e.classList.toggle(`l2-nav--light`,!!a&&!a.matches(nr))};addEventListener(`scroll`,()=>{n||(n=!0,requestAnimationFrame(r))},{passive:!0}),addEventListener(`resize`,r),r()}document.documentElement.classList.toggle(`plain`,new URLSearchParams(location.search).has(`plain`)),e(),i(),rr(document.querySelector(`.l2-nav`)),r(),er(document.querySelector(`.l2-hero`)),o(),Ue(document.querySelector(`.l2-design`)),Zt(document.querySelector(`.touch`));