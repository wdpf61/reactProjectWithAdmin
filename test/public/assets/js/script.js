/*
Author       : Dreamstechnologies
Template Name: Kanakku - Bootstrap Admin Template
*/

(function () {
    "use strict";

	// Variables declarations
	var $wrapper = $('.main-wrapper');
	var $slimScrolls = $('.slimscroll');
	var $pageWrapper = $('.page-wrapper');
	// feather.replace();

	// Page Content Height Resize
	$(window).resize(function () {
		if ($('.page-wrapper').length > 0) {
			var height = $(window).height();
			$(".page-wrapper").css("min-height", height);
		}
	});

	// Mobile menu sidebar overlay
	$('body').append('<div class="sidebar-overlay"></div>');

	$(document).on('click', '#mobile_btn', function() {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		$('#task_window').removeClass('opened');
		return false;
	});

	$(".sidebar-overlay").on("click", function () {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$wrapper.removeClass('slide-nav');
		$('.sidebar-overlay').removeClass('opened');
		$('#task_window').removeClass('opened');
	});

	// Logo Hide Btn

	$(document).on("click",".hideset",function () {
		$(this).parent().parent().parent().hide();
	});

	$(document).on("click",".delete-set",function () {
		$(this).parent().parent().hide();
	});

	// Stick Sidebar

	if ($(window).width() > 767) {
		if ($('.theiaStickySidebar').length > 0) {
			$('.theiaStickySidebar').theiaStickySidebar({
				// Settings
				additionalMarginTop: 30
			});
		}
	}

	// Datatable
	if($('.datatable').length > 0) {
		$('.datatable').DataTable({
			"bFilter": true,
			"sDom": 'fBtlpi',  
			"ordering": true,
			"language": {
				search: ' ',
				sLengthMenu: '_MENU_',
				searchPlaceholder: "Search",
				sLengthMenu: 'Row Per Page _MENU_ Entries',
				info: "_START_ - _END_ of _TOTAL_ items",
				paginate: {
					next: '<i class="isax isax-arrow-right-1"></i>',
					previous: '<i class="isax isax-arrow-left"></i> '
				},
			 },
			"scrollX": false,         // Enable horizontal scrolling
			"scrollCollapse": false,  // Adjust table size when the scroll is used
			"responsive": false,
			"autoWidth": false,
			initComplete: (settings, json)=>{
				$('.dataTables_filter').appendTo('#tableSearch');
				$('.dataTables_filter').appendTo('.search-input');
			},	
		});
	}	

	// Datetimepicker
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}
	
	// toggle-password
	if($('.toggle-password').length > 0) {
		$(document).on('click', '.toggle-password', function() {
			$(this).toggleClass("isax-eye isax-eye-slash");
			var input = $(".pass-input");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}
	if($('.toggle-passwords').length > 0) {
		$(document).on('click', '.toggle-passwords', function() {
			$(this).toggleClass("isax-eye isax-eye-slash");
			var input = $(".pass-inputs");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}
	if($('.toggle-passworda').length > 0) {
		$(document).on('click', '.toggle-passworda', function() {
			$(this).toggleClass("ti-eye ti-eye-off");
			var input = $(".pass-inputa");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {setTimeout
				input.attr("type", "password");
			}
		});
	}

	// Select 2	
	if ($('.select2').length > 0) {
	 	$(".select2").select2();
	}
	
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}

	// Select Image

	if ($('.select-img').length > 0) {
		function formatState (state) {
		  if (!state.id) { return state.text; }
		  var $state = $(
			'<span><img src="' + $(state.element).attr('data-image') + '" class="img-flag" / " width="16px"> ' + state.text + '</span>'
		  );
		  return $state;
		};
		$('.select-img').select2({
			minimumResultsForSearch: Infinity,
			  templateResult: formatState,
			  templateSelection: formatState
		});
	}

	// Summernote

	if($('.summernote').length > 0) {
		$('.summernote').summernote({
			height: 100,  
			minHeight: null,           
			maxHeight: null,      
			focus: true,
			toolbar: [
				['fontsize', ['fontsize']],
				['font', ['bold', 'italic', 'underline', 'clear', 'strikethrough']],
				['insert', ['picture']]
		  ],          
		});
	}

	// Sidebar Slimscroll
	if($slimScrolls.length > 0) {
		$slimScrolls.slimScroll({
			height: 'auto',
			width: '100%',
			position: 'right',
			size: '7px',
			color: '#ccc',
			wheelStep: 10,
			touchScrollStep: 100
		});
		var wHeight = $(window).height() - 60;
		$slimScrolls.height(wHeight);
		$('.sidebar .slimScrollDiv').height(wHeight);
		$(window).resize(function() {
			var rHeight = $(window).height() - 60;
			$slimScrolls.height(rHeight);
			$('.sidebar .slimScrollDiv').height(rHeight);
		});
	}

	// Sidebar
	var Sidemenu = function() {
		this.$menuItem = $('.sidebar-menu a');
	};

	function init() {
		var $this = Sidemenu;
		$('.sidebar-menu a').on('click', function(e) {
			if($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(250);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		$('.sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
	}

	
	// Sidebar Initiate
	init();
	$(document).on('mouseover', function(e) {
        e.stopPropagation();
        if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
            var targ = $(e.target).closest('.sidebar, .header-left, #toggle_btn').length;
            if (targ) {
               $('body').addClass('expand-menu');
                $('.subdrop + ul').slideDown();
            } else {
               $('body').removeClass('expand-menu');
                $('.subdrop + ul').slideUp();
            }
            return false;
        }
    });

	// Sidebar
	var Colsidemenu = function() {
		this.$menuItems = $('.sidebar-right a');
	};

	function colinit() {
		var $this = Colsidemenu;
		$('.sidebar-right ul a').on('click', function(e) {
			if($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(250);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		$('.sidebar-right ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
	}
	colinit();

	// Date Range Picker

	
	if($('#reportrange').length > 0) {
		var start = moment().subtract(29, "days"),
			end = moment();

		function report_range(start, end) {
			$("#reportrange span").html(start.format("D MMM YY") + " - " + end.format("D MMM YY"))
		}
		$("#reportrange").daterangepicker({
			startDate: start,
			endDate: end,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, "days"), moment().subtract(1, "days")],
				"Last 7 Days": [moment().subtract(6, "days"), moment()],
				"Last 30 Days": [moment().subtract(29, "days"), moment()],
				"This Month": [moment().startOf("month"), moment().endOf("month")],
				"Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
			}
		}, report_range), report_range(end, end);
	}

	if($('.bookingrange').length > 0) {
		var start = moment().subtract(6, 'days');
		var end = moment();
		function booking_range(start, end) {
			$('.bookingrange span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
		}

		$('.bookingrange').daterangepicker({
			startDate: start,
			endDate: end,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Year': [moment().startOf('year'), moment().endOf('year')],
				'Next Year': [moment().add(1, 'year').startOf('year'), moment().add(1, 'year').endOf('year')]
			}
		}, booking_range);
		booking_range(start, end);
	}

	
	if($('.daterange').length > 0) {
		$('.daterange').daterangepicker({
			autoUpdateInput: false,  // Prevents immediate update of input field
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Year': [moment().startOf('year'), moment().endOf('year')],
				'Next Year': [moment().add(1, 'year').startOf('year'), moment().add(1, 'year').endOf('year')]
			},
			locale: {
				cancelLabel: 'Clear'
			}
		});
		$('#daterange').on('input', function() {
			var textLength = $(this).val().length;
			$(this).css('width', (textLength + 10) + 'px'); // 10ch adds space for padding
		});
	
		// Event when the user selects a date
		$('.daterange').on('apply.daterangepicker', function(ev, picker) {
			$(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
		});
	
		// Event for clearing the selected date
		$('.daterange').on('cancel.daterangepicker', function(ev, picker) {
			$(this).val('');  // Resets to placeholder
		});
	}

	//toggle_btn
	$(document).on('click', '#toggle_btn', function() {
		if ($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$(this).addClass('active');
			$('.subdrop + ul');
			localStorage.setItem('screenModeNightTokenState', 'night');
			setTimeout(function() {
				$("body").removeClass("mini-sidebar");
				$(".header-left").addClass("active");
			}, 100);
		} else {
			$('body').addClass('mini-sidebar');
			$(this).removeClass('active');
			$('.subdrop + ul');
			localStorage.removeItem('screenModeNightTokenState', 'night');
			setTimeout(function() {
				$("body").addClass("mini-sidebar");
				$(".header-left").removeClass("active");
			}, 100);
		}
		return false;
	});

	var myDiv = document.querySelector('.sticky-sidebar-one');	

	$('.themecolorset').on('click', function(){
		$('.themecolorset').removeClass('active');
		$(this).addClass('active');
	});

	$('.theme-layout').on('click', function(){
		$('.theme-layout').removeClass('active');
		$(this).addClass('active');
	});


	if($('.win-maximize').length > 0) {
		$('.win-maximize').on('click', function(e){
			if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen();
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				}
			}
		})
	}

		// Custom Country Code Selector

		if ($('#phone').length > 0) {
			var input = document.querySelector("#phone");
			window.intlTelInput(input, {
				utilsScript: "assets/plugins/intltelinput/js/utils.js",
			});
		}

		if ($('#phone2').length > 0) {
			var input = document.querySelector("#phone2");
			window.intlTelInput(input, {
				utilsScript: "assets/plugins/intltelinput/js/utils.js",
			});
		}

		if ($('#phone3').length > 0) {
			var input = document.querySelector("#phone3");
			window.intlTelInput(input, {
				utilsScript: "assets/plugins/intltelinput/js/utils.js",
			});
		}


// select all 2
	$(document).on('click', '#check_all', function() {
		$('.checkmail').click();
		return false;
	});
	var selectAllItems = "#select-all2";
	var checkboxItem = ".form-check.form-check-md :checkbox";
	$(selectAllItems).on('click', function(){
		
		if (this.checked) {
		$(checkboxItem).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem).each(function() {
			this.checked = false;
		});
		}
		
	});

	// select all 3
	$(document).on('click', '#check_all', function() {
		$('.checkmail').click();
		return false;
	});
	var selectAllItems = "#select-all3";
	var checkboxItem = ".form-check.form-check-md :checkbox";
	$(selectAllItems).on('click', function(){
		
		if (this.checked) {
		$(checkboxItem).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem).each(function() {
			this.checked = false;
		});
		}
		
	});
	document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll(".close-modal").forEach(function (element) {
		  element.addEventListener("click", function () {
			var modal = document.querySelector(".custom-modal.show"); 
			if (modal) {
			  var modalInstance = bootstrap.Modal.getInstance(modal);
			  modalInstance.hide(); 
			}
		  });
		});
	  });
	// Tooltip
	if($('[data-bs-toggle="tooltip"]').length > 0) {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}
	
	if(window.location.hash == "#LightMode"){
		localStorage.setItem('theme', 'dark');
	}
	else {
		if(window.location.hash == "#DarkMode"){
			localStorage.setItem('theme', 'light');
		}
	}

	
	$('ul.tabs li').on('click', function(){
		var $this = $(this);
		var $theTab = $(this).attr('id');
		if($this.hasClass('active')){
		  // do nothing
		} else{
		  $this.closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab_content').removeClass('active');
		  $('.tabs_container .tab_content[data-tab="'+$theTab+'"], ul.tabs li[id="'+$theTab+'"]').addClass('active');
		}
		
	});

	// Date Range Picker
	if ($('input[name="datetimes"]').length > 0) {
		$('input[name="datetimes"]').daterangepicker({
		timePicker: true,
		startDate: moment().startOf('hour'),
		endDate: moment().startOf('hour').add(32, 'hour'),
		locale: {
		format: 'M/DD hh:mm A'
		}
	});
	}

	if($('.custom-input').length > 0) {
		const inputRange = document.querySelector('.custom-input');

		inputRange.addEventListener('input', function () {
			const progress = (inputRange.value - inputRange.min) / (inputRange.max - inputRange.min) * 100;
			inputRange.style.background = `linear-gradient(to top, var(--md-sys-color-on-surface-variant) 0%, var(--md-sys-color-on-surface-variant) ${progress}%, var(--md-sys-color-surface-variant) ${progress}%, var(--md-sys-color-surface-variant) 100%)`;
		});
	}

	// Datetimepicker time

	if ($('.timepicker').length > 0) {
		$('.timepicker').datetimepicker({
			format: 'HH:mm A',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}

	// month picker
	if ($('.month-picker').length > 0) {
	document.getElementById('monthly').value = '2025-01';
	document.getElementById('monthly2').value = '2025-12';
	}
	
	// Collapse Header
	if($('.btnFullscreen').length > 0) {
		const btnFullscreenElements = document.getElementsByClassName('btnFullscreen');

		// Add an event listener to each element
		Array.from(btnFullscreenElements).forEach(element => {
			element.addEventListener('click', function() {
				toggleFullscreen();
			});
		});

		// Function to toggle fullscreen mode
		function toggleFullscreen() {
			if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen();
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				}
			}
		}
	} 

	if($('#collapse-header').length > 0) {
		document.getElementById('collapse-header').onclick = function() {
		    this.classList.toggle('active');
		    document.body.classList.toggle('header-collapse');
		}
	}

	if($('.kanban-drag-wrap').length > 0) {
        $(".kanban-drag-wrap").sortable({
            connectWith: ".kanban-drag-wrap",
            handle: ".kanban-card",
            placeholder: "drag-placeholder"
        });
    }

	// Increment Decrement

	$(".inc").on('click', function() {
	    updateValue(this, 1);
	});
	$(".dec").on('click', function() {
	    updateValue(this, -1);
	});
	function updateValue(obj, delta) {
	    var item = $(obj).parent().find("input");
	    var newValue = parseInt(item.val(), 10) + delta;
	    item.val(Math.max(newValue, 0));
	}


	  /* card with fullscreen */
	  let DIV_CARD = ".card";
	  let cardFullscreenBtn = document.querySelectorAll(
		'[data-bs-toggle="card-fullscreen"]'
	  );
	  cardFullscreenBtn.forEach((ele) => {
		ele.addEventListener("click", function (e) {
		  let $this = this;
		  let card = $this.closest(DIV_CARD);
		  card.classList.toggle("card-fullscreen");
		  card.classList.remove("card-collapsed");
		  e.preventDefault();
		  return false;
		});
	  });
	  /* card with fullscreen */

	    /* card with close button */
  		let DIV_CARD_CLOSE = ".card";
		let cardRemoveBtn = document.querySelectorAll(
			'[data-bs-toggle="card-remove"]'
		);
		cardRemoveBtn.forEach((ele) => {
			ele.addEventListener("click", function (e) {
			e.preventDefault();
			let $this = this;
			let card = $this.closest(DIV_CARD_CLOSE);
			card.remove();
			return false;
			});
		});
		/* card with close button */

		setTimeout(function(){
			$(".rating-select").on('click', function() {
				$(this).find("i").toggleClass("ti-star ti-star-filled filled");
			});
		},100);

	// Datetimepicker

	if($('.yearpicker').length > 0 ){
		$('.yearpicker').datetimepicker({
			viewMode: 'years',
			format: 'YYYY',

			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}

	// Upload Image 

	$('.image-sign').on('change', function(){
		$(this).closest('.upload-pic').find(".frames").html('');
		for (var i = 0; i < $(this)[0].files.length; i++) {
			$(this).closest('.upload-pic').find(".frames").append('<img src="'+window.URL.createObjectURL(this.files[i])+'" width="100px" height="100px">');
		}
	});

	if($('.stack-menu').length > 0) {
		var activeTab = null;
		$('.stack-menu .nav a').on('click', function(e) {
			e.preventDefault();
			var currentTab = $(this).attr('href');

			if (activeTab === currentTab) {
				if ($(currentTab).is(':visible')) {
					$(currentTab).hide(); 
					activeTab = null;
				} else {
					$(currentTab).show(); 
					activeTab = currentTab;
				}
			} else {
				$('#myTabContent .tab-pane').hide(); 
				$(currentTab).show(); 
				activeTab = currentTab;
			}
		});
	}


	var selectAllItems = "#select-all";
	var checkboxItem = ".form-check.form-check-md :checkbox";
	$(selectAllItems).on('click', function(){	
		if (this.checked) {
		$(checkboxItem).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem).each(function() {
			this.checked = false;
		});
		}

		
	});

	function toggleFullscreen(elem) {
		elem = elem || document.documentElement;
		if (!document.fullscreenElement && !document.mozFullScreenElement &&
		!document.webkitFullscreenElement && !document.msFullscreenElement) {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
		} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
		}
	}

	if($('.switch-coder').length > 0) {
		$(".switch-coder").on("change", function () {
			var $card = $(this).closest(".card");
			var $viewPreview = $card.find(".view-preview");
			var $viewCode = $card.find(".view-code");	
			if ($(this).prop("checked")) {
				$viewPreview.addClass("d-none");
				$viewCode.removeClass("d-none");
			} else {
				$viewPreview.removeClass("d-none");
				$viewCode.addClass("d-none");
			}
		});
	}

		document.addEventListener("DOMContentLoaded", function () {
			document.addEventListener("click", function (event) {
				if (event.target.classList.contains("close-filter")) {
					const filterDropdown = event.target.closest(".dropdown-info");
					if (filterDropdown) {
						filterDropdown.classList.remove("show");
						console.log("Dropdown closed:", filterDropdown);
					}
				}
			});
		});
		
		

		//Trial Item
		if($('.trial-item').length > 0) {
			$(".trial-item .close-icon").on("click", function () {
				$(this).closest(".trial-item").hide(); 
			});
		}
		
		/* Aprrearence Settings */
		$('.theme-image').on('click', function(){
			$('.theme-image').removeClass('active');
			$(this).addClass('active');
		});

	// Select Color

	if($('.select2-color').length > 0) {
		$(".select2-color").select2({
			minimumResultsForSearch: -1,
			templateResult: formatColor,
			templateSelection: formatColor // Apply same format to selected value
		});	
		function formatColor(option) {
			if (!option.id) return option.text; // Skip placeholder
	
			let className = $(option.element).attr("class") || ""; 
	
			return $(
				'<span>' +
				'<i class="fa-solid fa-circle fs-6 me-1 ' + className + '"></i> ' + 
				option.text +
				'</span>'
			);
		}
	}

	// Selct All for Dropdown

	if($('.select-all').length > 0) {
		$(".select-all").on("click", function () {
			let checkboxGroup = $(this).closest(".dropdown").find(":checkbox");
			checkboxGroup.prop("checked", this.checked);
		});
	}	

	// Tag Close
	if($('.tag').length > 0) {
		$('.tag-close').on('click', function(){
			$(this).closest(".tag").hide(); 
		});
	}

	// Filter Submit
	if($('#filter-submit').length > 0) {
		$("#filter-submit").on('click', function(){
			$(".filter-info").slideDown(300);
			$(".filter-info").addClass('show');
			$(".filter-info").addClass('d-flex');
		});
	}

	document.addEventListener("DOMContentLoaded", function () {			
		const closeBtn = document.getElementById("close-filter");	
		if (closeBtn) {
			closeBtn.addEventListener("click", function () {
				const parentDropdown = closeBtn.closest(".dropdown-info"); 
				if (parentDropdown) {
					parentDropdown.classList.remove("show");
				}
			});
		}
	});
	
	document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll(".twocol-mini  .dropdown").forEach(dropdown => {
			dropdown.addEventListener("show.bs.dropdown", function (event) {
				let menu = this.querySelector(".dropdown-menu");
				let rect = this.getBoundingClientRect();

				// Set correct position
				menu.style.position = "fixed";
				menu.style.top = `${rect.bottom}px`;
				menu.style.left = `${rect.left}px`;
				menu.style.width = `${rect.width}px`; 
			});
		});
	});

	// Quill Editor

	if($('.editor').length > 0) {
		document.querySelectorAll('.editor').forEach((editor) => {
			new Quill(editor, {
			  theme: 'snow'
			});
		});
	}	

	// Remove Gallery
	$(document).on("click", ".gallery-trash", function () {
		$(this).parent().hide();
	});

	// Add Invoice TAble
	$(".add-invoice-data").on('click',function(e){
		const tableBody = $('.add-table tbody');
        const rowCount = tableBody.find('tr').length + 1;
		var addTable = `<tr>
							<td>
								<input type="text" class="form-control" value="Enter Product Name">
							</td>
							<td>
								<input type="text" class="form-control" value="0">
							</td>
							<td>
								<input type="text" class="form-control" value="Unit">
							</td>
							<td>
								<input type="text" class="form-control" value="0">
							</td>
							<td>
								<input type="text" class="form-control" value="0%">
							</td>
							<td>
								<input type="text" class="form-control" value="0">
							</td>
							<td>
								<input type="text" class="form-control" value="0" style="min-width: 66px;">
							</td>
							<td>
								<div>
									<a href="javascript:void(0);" class="text-danger remove-table"><i class="isax isax-close-circle"></i></a>
								</div>
							</td>
						</tr>`; 
		$('tbody.add-tbody').append(addTable);
		e.preventDefault();
  	});

	  $(document).on('click','.remove-table',function(){
		$(this).parents('tr').remove();
		const tableBody = $('.add-table tbody');
	  const rowCount = tableBody.find('tr').length - 1;
	  var editAddTable = `<tr><td>${rowCount}</td></tr>`
  });

  	// Aprrearence Settings 
	$('.theme-image').on('click', function(){
		$('.theme-image').removeClass('active');
		$(this).addClass('active');
	});

	$('.themecolorset').on('click', function(){
		$('.themecolorset').removeClass('active');
		$(this).addClass('active');
	});

	/* Invoice Template */
	$('.invoice-template').on('click', function(){
		$('.invoice-template').removeClass('active');
		$(this).addClass('active');
	});

	//Increment Decrement Numberes
	$(".quantity-btn").on("click", function () {

        var $button = $(this);
        var oldValue = $button.closest('.product-quantity').find("input.quntity-input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.closest('.product-quantity').find("input.quntity-input").val(newVal);
	});
	
})();