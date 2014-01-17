Ember.TEMPLATES["administration"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<header class=\"l-mainHeader\">\n	<h2>Administration</h2>\n</header>\n\n<div class=\"l-workspace\">\n	<section class=\"l-mainContent\">\n		<p>Kommer snart...</p>\n	</section>\n</div>\n");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n			Callista Care 2.0\n		");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n				Tidbok\n			");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n				Patienter\n			");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n				Rapporter\n			");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n				Administration\n			");
  }

  data.buffer.push("<nav class=\"navbar navbar-default\">\n	<div class=\"navbar-header\">\n		");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("navbar-brand")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</div>\n\n	<ul class=\"nav navbar-nav navbar-right\">\n		<li>\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "appointments", options) : helperMissing.call(depth0, "link-to", "appointments", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n		<li>\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "patients", options) : helperMissing.call(depth0, "link-to", "patients", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n		<li>\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "reports", options) : helperMissing.call(depth0, "link-to", "reports", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n		<li>\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "administration", options) : helperMissing.call(depth0, "link-to", "administration", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n	</ul>\n</nav>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["appointments"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n				<i class=\"fa fa-plus\"></i> Ny\n			");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n				Dag\n			");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n				Vecka\n			");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n				Månad\n			");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n				År\n			");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n		<section class=\"l-mainContent\">\n			");
  hashContexts = {'width': depth0,'height': depth0,'events': depth0};
  hashTypes = {'width': "INTEGER",'height': "INTEGER",'events': "ID"};
  options = {hash:{
    'width': (940),
    'height': (455),
    'events': ("controller.content")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.calendar || (depth0 && depth0.calendar)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "calendar", options))));
  data.buffer.push("\n		</section>\n	");
  return buffer;
  }

  data.buffer.push("<header class=\"l-mainHeader\">\n\n	<h2>Tidbok</h2>\n\n	<div class=\"btn-group\" style=\"margin: -3px 0 0 10px;\">\n		<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previous", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-chevron-left\"></i></button>\n		<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "next", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-chevron-right\"></i></button>\n		");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("textFilter"),
    'class': ("form-control f-search no-float"),
    'placeholder': ("Sök")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	</div>\n\n	<ul class=\"pull-right g-segmented-control\" style=\"margin-left:10px;\">\n		<li>\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "appointments.create", options) : helperMissing.call(depth0, "link-to", "appointments.create", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n	</ul>\n	<ul class=\"pull-right g-segmented-control\" style=\"margin-left:10px;\">\n		<li>\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "appointments.day", options) : helperMissing.call(depth0, "link-to", "appointments.day", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n		<li>\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "appointments.week", options) : helperMissing.call(depth0, "link-to", "appointments.week", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n		<li>\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "appointments.month", options) : helperMissing.call(depth0, "link-to", "appointments.month", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n		<li>\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "appointments.year", options) : helperMissing.call(depth0, "link-to", "appointments.year", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n	</ul>\n\n</header>\n\n<div class=\"l-workspace\">\n	");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "showCalendar", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n	");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["appointments/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<nav ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":l-sideForm controllers.appointments.showCreateAppointment:l-visible:l-hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n	<h3>Ny bokning</h3>\n\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("date"),
    'class': ("form-control"),
    'placeholder': ("Datum")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("start"),
    'class': ("form-control"),
    'placeholder': ("Starttid")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("end"),
    'class': ("form-control"),
    'placeholder': ("Sluttid")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("notes"),
    'class': ("form-control"),
    'placeholder': ("Anteckningar")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || (depth0 && depth0.textarea)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n		</div>\n	</div>\n\n	<div class=\"f-actions\">\n		<button class=\"btn btn-success\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-check\"></i> Spara</button>\n		<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Avbryt</button>\n	</div>\n</nav>\n");
  return buffer;
  
});

Ember.TEMPLATES["appointments/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<nav ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":l-sideForm controllers.appointments.showEditAppointment:l-visible:l-hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n	<h3>Bokning</h3>\n\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("date"),
    'class': ("form-control"),
    'placeholder': ("Datum")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("start"),
    'class': ("form-control"),
    'placeholder': ("Starttid")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("end"),
    'class': ("form-control"),
    'placeholder': ("Sluttid")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("notes"),
    'class': ("form-control"),
    'placeholder': ("Anteckningar")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || (depth0 && depth0.textarea)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n		</div>\n	</div>\n\n	<div class=\"f-actions\">\n		<button class=\"btn btn-success\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-check\"></i> Spara</button>\n		<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Avbryt</button>\n	</div>\n</nav>\n");
  return buffer;
  
});

Ember.TEMPLATES["appointments/month"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"l-mainContent\">\n	<p>Kommer snart...</p>\n</section>\n");
  
});

Ember.TEMPLATES["appointments/year"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"l-mainContent\">\n	<p>Kommer snart...</p>\n</section>\n");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<header class=\"l-mainHeader\">\n	<h2>Välkommen</h2>\n</header>\n\n<div class=\"l-workspace\">\n	<section class=\"l-mainContent\">\n		<p>Välkommen till Callista Care!</p>\n	</section>\n</div>\n");
  
});

Ember.TEMPLATES["note/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<nav ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":l-sideForm controllers.patient.showEditNote:l-visible:l-hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n	<h3>Journalanteckning</h3>\n\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			<label style=\"display: block;\">Journalposttyp</label>\n			");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("types"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.name"),
    'value': ("type")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("doctor"),
    'class': ("form-control"),
    'placeholder': ("Läkare")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("text"),
    'class': ("form-control"),
    'placeholder': ("Fritext")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || (depth0 && depth0.textarea)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n		</div>\n	</div>\n\n	<div class=\"f-actions\">\n		<button class=\"btn btn-success\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-check\"></i> Spara</button>\n		<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Avbryt</button>\n	</div>\n</nav>\n");
  return buffer;
  
});

Ember.TEMPLATES["notes/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<nav ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":l-sideForm controllers.patient.showCreateNote:l-visible:l-hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n	<h3>Ny journalanteckning</h3>\n\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			<label style=\"display: block;\">Journalposttyp</label>\n			");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("types"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.name"),
    'value': ("type")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("doctor"),
    'class': ("form-control"),
    'placeholder': ("Läkare")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("text"),
    'class': ("form-control"),
    'placeholder': ("Fritext")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || (depth0 && depth0.textarea)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n		</div>\n	</div>\n\n	<div class=\"f-actions\">\n		<button class=\"btn btn-success\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-check\"></i> Spara</button>\n		<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Avbryt</button>\n	</div>\n</nav>\n");
  return buffer;
  
});

Ember.TEMPLATES["patient"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n	<nav ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":l-sideMenu showSearch:l-visible:l-hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n		<h3>Sök</h3>\n\n		<div class=\"l-horizontal\">\n			<div class=\"form-group f-floating-label-form-group\">\n				");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("startDateFilter"),
    'class': ("form-control"),
    'placeholder': ("Från datum")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			</div>\n		</div>\n		<div class=\"l-horizontal\">\n			<div class=\"form-group f-floating-label-form-group\">\n				");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("endDateFilter"),
    'class': ("form-control"),
    'placeholder': ("Till datum")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			</div>\n		</div>\n		<div class=\"l-horizontal\">\n			<div class=\"form-group f-floating-label-form-group\">\n				");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("doctorFilter"),
    'class': ("form-control"),
    'placeholder': ("Läkare")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			</div>\n		</div>\n		<div class=\"l-horizontal\">\n			<div class=\"form-group f-floating-label-form-group\">\n				");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("textFilter"),
    'class': ("form-control"),
    'placeholder': ("Fritext")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n			</div>\n		</div>\n\n	</nav>\n	<section class=\"l-mainContent\">\n		<table class=\"table table-hover\">\n			<colgroup>\n				<col style=\"width: 100px\">\n				<col style=\"width: 100px\">\n				<col style=\"width: 100%\">\n				<col style=\"width: 150px\">\n			</colgroup>\n			<thead>\n			<tr>\n				<th>Datum</th>\n				<th>Typ</th>\n				<th>Information</th>\n				<th>Läkare</th>\n			</tr>\n			</thead>\n			<tbody>\n			");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "note", "in", "controller", {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n			</tbody>\n		</table>\n	</section>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n				");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("tr")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "note.edit", "note", options) : helperMissing.call(depth0, "link-to", "note.edit", "note", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n			");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n					<td>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.formatDate || (depth0 && depth0.formatDate)),stack1 ? stack1.call(depth0, "note.createdTime", options) : helperMissing.call(depth0, "formatDate", "note.createdTime", options))));
  data.buffer.push("</td>\n					<td>");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers._triageMustache.call(depth0, "note.typeText", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n					<td>");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers._triageMustache.call(depth0, "note.text", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n					<td>");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers._triageMustache.call(depth0, "note.doctor", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</td>\n				");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n				<tr class=\"t-empty\">\n					<td colspan=\"3\">Inga journalanteckningar hittades</td>\n				</tr>\n			");
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.unless.call(depth0, "showEcg", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["patient/ecg"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"l-mainContent\" style=\"padding-top: 25px\">\n	");
  hashContexts = {'width': depth0,'height': depth0};
  hashTypes = {'width': "INTEGER",'height': "INTEGER"};
  options = {hash:{
    'width': (940),
    'height': (395)
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['ecg-chart'] || (depth0 && depth0['ecg-chart'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ecg-chart", options))));
  data.buffer.push("\n\n	<div class=\"f-actions\">\n		<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Stäng</button>\n	</div>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["patient/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<nav ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":l-sideForm controllers.patient.showEditPatient:l-visible:l-hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n	<h3>Patientuppgifter</h3>\n\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("civicRegNr"),
    'class': ("form-control"),
    'placeholder': ("Personnummer")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("firstName"),
    'class': ("form-control"),
    'placeholder': ("Förnamn")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("lastName"),
    'class': ("form-control"),
    'placeholder': ("Efternamn")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("streetAddress"),
    'class': ("form-control"),
    'placeholder': ("Gatuadress")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("zipCode"),
    'class': ("form-control"),
    'placeholder': ("Postnummer")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("city"),
    'class': ("form-control"),
    'placeholder': ("Postort")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("phone"),
    'class': ("form-control"),
    'placeholder': ("Telefon")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("mobile"),
    'class': ("form-control"),
    'placeholder': ("Mobil")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n\n	<div class=\"f-actions\">\n		<button class=\"btn btn-success\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-check\"></i> Spara</button>\n		<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Avbryt</button>\n	</div>\n</nav>\n");
  return buffer;
  
});

Ember.TEMPLATES["patient/header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n			<i class=\"fa fa-plus\"></i> Ny\n		");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n			<i class=\"fa fa-heart\"></i> Ekg\n		");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n			<i class=\"fa fa-user\"></i> Patientuppgifter\n		");
  }

  data.buffer.push("<button class=\"btn\" style=\"margin: -3px 10px 0 0;\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "back", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n	<i class=\"fa fa-chevron-left\"></i> Stäng\n</button>\n\n<h2>");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers._triageMustache.call(depth0, "patient.firstName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers._triageMustache.call(depth0, "patient.lastName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers._triageMustache.call(depth0, "patient.civicRegNr", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</h2>\n<ul class=\"pull-right g-segmented-control\">\n	<li>\n		");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "notes.create", options) : helperMissing.call(depth0, "link-to", "notes.create", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</li>\n</ul>\n<ul class=\"pull-right g-segmented-control\" style=\"margin-right: 10px;\">\n\n	<li>\n		");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "patient.ecg", options) : helperMissing.call(depth0, "link-to", "patient.ecg", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</li>\n	<li>\n		");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "patient.edit", options) : helperMissing.call(depth0, "link-to", "patient.edit", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</li>\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["patients"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n		<nav ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":l-sideMenu showSearch:l-visible:l-hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n			<h3>Sök</h3>\n\n			<div class=\"l-horizontal\">\n				<div class=\"form-group f-floating-label-form-group\">\n					");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("civicRegNrFilter"),
    'class': ("form-control"),
    'placeholder': ("Personnummer")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n				</div>\n			</div>\n			<div class=\"l-horizontal\">\n				<div class=\"form-group f-floating-label-form-group\">\n					");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("firstNameFilter"),
    'class': ("form-control"),
    'placeholder': ("Förnamn")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n				</div>\n			</div>\n			<div class=\"l-horizontal\">\n				<div class=\"form-group f-floating-label-form-group\">\n					");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("lastNameFilter"),
    'class': ("form-control"),
    'placeholder': ("Efternamn")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n				</div>\n			</div>\n			<div class=\"l-horizontal\">\n				<div class=\"form-group f-floating-label-form-group\">\n					");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("cityFilter"),
    'class': ("form-control"),
    'placeholder': ("Ort")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n				</div>\n			</div>\n		</nav>\n\n		<section class=\"l-mainContent\">\n			<table class=\"table table-hover\">\n				<colgroup>\n					<col style=\"width: 130px\">\n					<col style=\"width: 160px\">\n					<col style=\"width: 100%\">\n				</colgroup>\n				<thead>\n				<tr>\n					<th>Personnummer</th>\n					<th>Namn</th>\n					<th>Ort</th>\n				</tr>\n				</thead>\n				<tbody>\n				");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "patient", "in", "controller", {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</tbody>\n			</table>\n		</section>\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n					");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("tr")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "patient", "patient", options) : helperMissing.call(depth0, "link-to", "patient", "patient", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n						<td>");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers._triageMustache.call(depth0, "patient.civicRegNr", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						<td>");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers._triageMustache.call(depth0, "patient.firstName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers._triageMustache.call(depth0, "patient.lastName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n						<td>");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers._triageMustache.call(depth0, "patient.city", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n					");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n					<tr class=\"t-empty\">\n						<td colspan=\"3\">Inga patienter hittades</td>\n					</tr>\n				");
  }

  data.buffer.push("<header ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":l-mainHeader showPatient:l-visible:l-hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n	");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || (depth0 && depth0.outlet)),stack1 ? stack1.call(depth0, "patientHeader", options) : helperMissing.call(depth0, "outlet", "patientHeader", options))));
  data.buffer.push("\n</header>\n<header ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":l-mainHeader showPatient:l-hidden:l-visible")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n	");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || (depth0 && depth0.outlet)),stack1 ? stack1.call(depth0, "patientsHeader", options) : helperMissing.call(depth0, "outlet", "patientsHeader", options))));
  data.buffer.push("\n</header>\n\n<div class=\"l-workspace\">\n\n	");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "showPatient", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n	");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["patients/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":l-sideForm controllers.patients.showCreatePatient:l-visible:l-hidden")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.bindAttr || (depth0 && depth0.bindAttr)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n	<h3>Ny patient</h3>\n\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("civicRegNr"),
    'class': ("form-control"),
    'placeholder': ("Personnummer")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("firstName"),
    'class': ("form-control"),
    'placeholder': ("Förnamn")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("lastName"),
    'class': ("form-control"),
    'placeholder': ("Efternamn")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("streetAddress"),
    'class': ("form-control"),
    'placeholder': ("Gatuadress")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("zipCode"),
    'class': ("form-control"),
    'placeholder': ("Postnummer")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("city"),
    'class': ("form-control"),
    'placeholder': ("Postort")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n	<div class=\"l-horizontal\">\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("phone"),
    'class': ("form-control"),
    'placeholder': ("Telefon")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n		<div class=\"form-group f-floating-label-form-group\">\n			");
  hashContexts = {'value': depth0,'class': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'class': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("mobile"),
    'class': ("form-control"),
    'placeholder': ("Mobil")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div>\n	</div>\n\n	<div class=\"f-actions\">\n		<button class=\"btn btn-success\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"fa fa-check\"></i> Spara</button>\n		<button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Avbryt</button>\n	</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["patients/header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n			<i class=\"fa fa-plus\"></i> Ny\n		");
  }

  data.buffer.push("<h2>Patienter</h2>\n<ul class=\"pull-right g-segmented-control\">\n	<li>\n		");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "patients.create", options) : helperMissing.call(depth0, "link-to", "patients.create", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</li>\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["reports"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<header class=\"l-mainHeader\">\n	<h2>Rapporter</h2>\n</header>\n\n<div class=\"l-workspace\">\n	<section class=\"l-mainContent\">\n		<p>Kommer snart...</p>\n	</section>\n</div>\n");
  
});