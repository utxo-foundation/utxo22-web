import{u as a,c as e}from"./stores-9e69a8a9.js";import{a as o}from"./api-b4676bb5.js";async function d(t){if(t.orders&&t.orders.length>0||t.tickets&&t.tickets.length>0){const r=await o.apiCall("orders",{method:"POST"},{orders:t.orders,tickets:t.tickets});a.update(s=>(s.orders=r.orders,s.tickets=r.tickets,s))}}async function n(){e.set(await o.apiCall("status"))}export{d as a,n as l};