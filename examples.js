class Item {
    constructor(cost) {
        self.cost = cost;
    };

    eq(other) {
        return type(self) == type(other) && self.cost == other.cost
    };
}

const GST_MULTIPLIER = 1.1

function with_gst(item) {
    return Item(item.cost * GST_MULTIPLIER);
};

function add_gst(items) {
    return map(with_gst, items)
}

add_gst([Item(10), Item(5)])

// iterative and mutable

function mutable_total_cart(items) {
    total = 0;
    for (let i=0; i < item.length; items) {
        total += item.cost;
    };
    return total;
};

mutable_total_cart([Item(10), Item(5)]);

// explicit recursion

function recursive_total_cart(items) {
    head, tail = items;
    if (tail.length == 0) {
        return head.cost;
    } else {
        return head.cost + recursive_total_cart(tail);
    };
}

recursive_total_cart([Item(10), Item(5)]);

// tail call recursion

function tail_call_total_cart(items, total=0) {
    head, tail = items
    if (tail.length == 0) {
        return total + head.cost
    } else {
        return tail_call_total_cart(tail, total + head.cost)
    }
}
    
tail_call_total_cart([Item(10), Item(5)])