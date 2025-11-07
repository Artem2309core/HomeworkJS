const clientsSorted = [...clients].sort((a, b) => a.order.length - b.order.length);
console.log(, clientsSorted.map(c => ({ id: c.id, items: c.order.length })));