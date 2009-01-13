describe('new MouseTracker() using an image', {
	'before': function() {
	  img_count = $$('img').length;
		tracker = new Bounga.MouseTracker({ 'id': 'image', image: '../example/cat.gif' });
		tracker.detach();
		tracker_img = $('image');
	},
	'should not be null': function() {
		value_of(tracker).should_not_be(null);
	},
	'should have default delay': function() {
		value_of(tracker.options.delay).should_be(200);
	},
	'should have default offset': function() {
		value_of(tracker.options.offset).should_be({ x: -20, y: 20 });
	},
	'should have an image': function() {
		value_of(tracker.options.image).should_not_be(null);
		value_of(tracker.options.image).should_be('../example/cat.gif');
	},
	'should create a new div': function() {
	  new_img_count = $$('img').length;
		value_of(new_img_count).should_be(img_count + 1);
	},
	'should be position:absolute': function() {
	  value_of(tracker_img.getStyle('position')).should_be('absolute');
	},
	'should have default top value': function() {
	  value_of(tracker_img.getStyle('top')).should_be('-1000px');
	},
	'should have default left value': function() {
	  value_of(tracker_img.getStyle('left')).should_be('-1000px');
	},
	'should have default z-index value': function() {
	  value_of(tracker_img.getStyle('z-index')).should_be('20');
	},
	'should have a custom DOM id': function() {
	  value_of(tracker_img.get('id')).should_not_be(null);
	  value_of(tracker_img.get('id')).should_be('image');
	},
	'should have a null css class': function() {
	  value_of(tracker_img.get('class')).should_be('');
	}
})

describe('new MouseTracker() customized', {
	'before': function() {
	  div_count = $$('div').length;
		tracker = new Bounga.MouseTracker({
		                      'id': 'customized',
		                      'class': 'customized_class',
		                      'delay': 20,
		                      'offset': { x: -5, y: 10},
		                      'top': -10,
		                      'left': -10,
		                      'position': 'relative',
		                      'color': '#fff',
		                      'size': 40,
		                      'z-index': 999
		                    });
		tracker.detach();
		tracker_div = $('customized');
	},
	'should not be null': function() {
		value_of(tracker).should_not_be(null);
	},
	'should have custom delay': function() {
		value_of(tracker.options.delay).should_be(20);
	},
	'should have custom offset': function() {
		value_of(tracker.options.offset).should_be({ x: -5, y: 10 });
	},
	'should have custom size': function() {
		value_of(tracker.options.size).should_be(40);
	},
	'should have custom color': function() {
		value_of(tracker.options.color).should_be('#fff');
	},
	'should not have an image': function() {
		value_of(tracker.options.image).should_be(null);
	},
	'should create a new div': function() {
	  new_div_count = $$('div').length;
		value_of(new_div_count).should_be(div_count + 1);
	},
	'should be position:relative': function() {
	  value_of(tracker_div.getStyle('position')).should_be('relative');
	},
	'should have custom top value': function() {
	  value_of(tracker_div.getStyle('top')).should_be('-10px');
	},
	'should have custom left value': function() {
	  value_of(tracker_div.getStyle('left')).should_be('-10px');
	},
	'should have custom height value': function() {
	  value_of(tracker_div.getStyle('height')).should_be('40px');
	},
	'should have custom height value': function() {
	  value_of(tracker_div.getStyle('width')).should_be('40px');
	},
	'should have custom z-index value': function() {
	  value_of(tracker_div.getStyle('z-index')).should_be('999');
	},
	'should have custom background-color value': function() {
	  value_of(tracker_div.getStyle('background-color')).should_be('#ffffff');
	},
	'should not have a null DOM id': function() {
	  value_of(tracker_div.get('id')).should_not_be(null);
	  value_of(tracker_div.get('id')).should_be('customized');
	},
	'should not have a null css class': function() {
	  value_of(tracker_div.get('class')).should_not_be('');
	  value_of(tracker_div.get('class')).should_be('customized_class');
	}
})

describe('new MouseTracker()', {
	'before': function() {
	  div_count = $$('div').length;
		tracker = new Bounga.MouseTracker();
		tracker.detach();
		tracker_div = $$('div').getLast();
	},
	'should not be null': function() {
		value_of(tracker).should_not_be(null);
	},
	'should have default delay': function() {
		value_of(tracker.options.delay).should_be(200);
	},
	'should have default offset': function() {
		value_of(tracker.options.offset).should_be({ x: -20, y: 20 });
	},
	'should have default size': function() {
		value_of(tracker.options.size).should_be(20);
	},
	'should have default color': function() {
		value_of(tracker.options.color).should_be('#666');
	},
	'should not have an image': function() {
		value_of(tracker.options.image).should_be(null);
	},
	'should create a new div': function() {
	  new_div_count = $$('div').length;
		value_of(new_div_count).should_be(div_count + 1);
	},
	'should be position:absolute': function() {
	  value_of(tracker_div.getStyle('position')).should_be('absolute');
	},
	'should have default top value': function() {
	  value_of(tracker_div.getStyle('top')).should_be('-1000px');
	},
	'should have default left value': function() {
	  value_of(tracker_div.getStyle('left')).should_be('-1000px');
	},
	'should have default height value': function() {
	  value_of(tracker_div.getStyle('height')).should_be('20px');
	},
	'should have default height value': function() {
	  value_of(tracker_div.getStyle('width')).should_be('20px');
	},
	'should have default z-index value': function() {
	  value_of(tracker_div.getStyle('z-index')).should_be('20');
	},
	'should have default background-color value': function() {
	  value_of(tracker_div.getStyle('background-color')).should_be('#666666');
	},
	'should have a null DOM id': function() {
	  value_of(tracker_div.get('id')).should_be(null);
	},
	'should have a null css class': function() {
	  value_of(tracker_div.get('class')).should_be('');
	}
})