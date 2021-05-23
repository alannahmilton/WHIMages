import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as add_location, k as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.2d3c4139.js';

/* src/routes/index.svelte generated by Svelte v3.31.2 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let div0;
	let figure0;
	let img0;
	let img0_src_value;
	let t2;
	let figcaption0;
	let t3;
	let t4;
	let p0;
	let t5;
	let t6;
	let hr0;
	let t7;
	let div1;
	let figure1;
	let img1;
	let img1_src_value;
	let t8;
	let figcaption1;
	let t9;
	let t10;
	let p1;
	let t11;
	let t12;
	let hr1;
	let t13;
	let div2;
	let figure2;
	let img2;
	let img2_src_value;
	let t14;
	let figcaption2;
	let t15;
	let t16;
	let p2;
	let t17;
	let t18;
	let hr2;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("WHIMages");
			t1 = space();
			div0 = element("div");
			figure0 = element("figure");
			img0 = element("img");
			t2 = space();
			figcaption0 = element("figcaption");
			t3 = text("Frida Kahlo's The Two Fridas");
			t4 = space();
			p0 = element("p");
			t5 = text("A steady depiction of the dying that goes on while we are living. And a  clouded wall that confirms this is the world inside.");
			t6 = space();
			hr0 = element("hr");
			t7 = space();
			div1 = element("div");
			figure1 = element("figure");
			img1 = element("img");
			t8 = space();
			figcaption1 = element("figcaption");
			t9 = text("Frida Kahlo's The Two Fridas");
			t10 = space();
			p1 = element("p");
			t11 = text("A steady depiction of the dying that goes on while we are living. And a  clouded wall that confirms this is the world inside.");
			t12 = space();
			hr1 = element("hr");
			t13 = space();
			div2 = element("div");
			figure2 = element("figure");
			img2 = element("img");
			t14 = space();
			figcaption2 = element("figcaption");
			t15 = text("Erica McGilchrist's Improvisation No III");
			t16 = space();
			p2 = element("p");
			t17 = text("Mental submarines::: traversing through muted colours or an unsure mind. Two dominant ghost white forms that are translucent yet mirror-like, soft yet sharp. Feminine geometries that feel good together yet meaningless in isolation.");
			t18 = space();
			hr2 = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "WHIMages");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			figure0 = claim_element(div0_nodes, "FIGURE", {});
			var figure0_nodes = children(figure0);
			img0 = claim_element(figure0_nodes, "IMG", { src: true, alt: true });
			t2 = claim_space(figure0_nodes);
			figcaption0 = claim_element(figure0_nodes, "FIGCAPTION", {});
			var figcaption0_nodes = children(figcaption0);
			t3 = claim_text(figcaption0_nodes, "Frida Kahlo's The Two Fridas");
			figcaption0_nodes.forEach(detach_dev);
			figure0_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t5 = claim_text(p0_nodes, "A steady depiction of the dying that goes on while we are living. And a  clouded wall that confirms this is the world inside.");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			hr0 = claim_element(div0_nodes, "HR", {});
			div0_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			figure1 = claim_element(div1_nodes, "FIGURE", {});
			var figure1_nodes = children(figure1);
			img1 = claim_element(figure1_nodes, "IMG", { src: true, alt: true });
			t8 = claim_space(figure1_nodes);
			figcaption1 = claim_element(figure1_nodes, "FIGCAPTION", {});
			var figcaption1_nodes = children(figcaption1);
			t9 = claim_text(figcaption1_nodes, "Frida Kahlo's The Two Fridas");
			figcaption1_nodes.forEach(detach_dev);
			figure1_nodes.forEach(detach_dev);
			t10 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t11 = claim_text(p1_nodes, "A steady depiction of the dying that goes on while we are living. And a  clouded wall that confirms this is the world inside.");
			p1_nodes.forEach(detach_dev);
			t12 = claim_space(div1_nodes);
			hr1 = claim_element(div1_nodes, "HR", {});
			div1_nodes.forEach(detach_dev);
			t13 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			figure2 = claim_element(div2_nodes, "FIGURE", {});
			var figure2_nodes = children(figure2);
			img2 = claim_element(figure2_nodes, "IMG", { src: true, alt: true });
			t14 = claim_space(figure2_nodes);
			figcaption2 = claim_element(figure2_nodes, "FIGCAPTION", {});
			var figcaption2_nodes = children(figcaption2);
			t15 = claim_text(figcaption2_nodes, "Erica McGilchrist's Improvisation No III");
			figcaption2_nodes.forEach(detach_dev);
			figure2_nodes.forEach(detach_dev);
			t16 = claim_space(div2_nodes);
			p2 = claim_element(div2_nodes, "P", {});
			var p2_nodes = children(p2);
			t17 = claim_text(p2_nodes, "Mental submarines::: traversing through muted colours or an unsure mind. Two dominant ghost white forms that are translucent yet mirror-like, soft yet sharp. Feminine geometries that feel good together yet meaningless in isolation.");
			p2_nodes.forEach(detach_dev);
			t18 = claim_space(div2_nodes);
			hr2 = claim_element(div2_nodes, "HR", {});
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 0, 0, 0);
			if (img0.src !== (img0_src_value = "img/twoselves.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "twoselves");
			add_location(img0, file, 15, 2, 227);
			add_location(figcaption0, file, 16, 2, 275);
			add_location(figure0, file, 14, 1, 216);
			add_location(p0, file, 18, 1, 341);
			add_location(hr0, file, 21, 1, 480);
			attr_dev(div0, "class", "item");
			add_location(div0, file, 13, 0, 196);
			if (img1.src !== (img1_src_value = "img/twoselves.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "twoselves");
			add_location(img1, file, 26, 2, 526);
			add_location(figcaption1, file, 27, 2, 574);
			add_location(figure1, file, 25, 1, 515);
			add_location(p1, file, 29, 1, 640);
			add_location(hr1, file, 32, 1, 779);
			attr_dev(div1, "class", "item");
			add_location(div1, file, 24, 0, 495);
			if (img2.src !== (img2_src_value = "img/improvisation.jpg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "improvisation");
			add_location(img2, file, 37, 2, 825);
			add_location(figcaption2, file, 38, 2, 881);
			add_location(figure2, file, 36, 1, 814);
			add_location(p2, file, 40, 1, 959);
			add_location(hr2, file, 43, 1, 1204);
			attr_dev(div2, "class", "item");
			add_location(div2, file, 35, 0, 794);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div0, anchor);
			append_dev(div0, figure0);
			append_dev(figure0, img0);
			append_dev(figure0, t2);
			append_dev(figure0, figcaption0);
			append_dev(figcaption0, t3);
			append_dev(div0, t4);
			append_dev(div0, p0);
			append_dev(p0, t5);
			append_dev(div0, t6);
			append_dev(div0, hr0);
			insert_dev(target, t7, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, figure1);
			append_dev(figure1, img1);
			append_dev(figure1, t8);
			append_dev(figure1, figcaption1);
			append_dev(figcaption1, t9);
			append_dev(div1, t10);
			append_dev(div1, p1);
			append_dev(p1, t11);
			append_dev(div1, t12);
			append_dev(div1, hr1);
			insert_dev(target, t13, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, figure2);
			append_dev(figure2, img2);
			append_dev(figure2, t14);
			append_dev(figure2, figcaption2);
			append_dev(figcaption2, t15);
			append_dev(div2, t16);
			append_dev(div2, p2);
			append_dev(p2, t17);
			append_dev(div2, t18);
			append_dev(div2, hr2);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOGE4ZmEzMTguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
