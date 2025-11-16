// Apply the saved theme settings from local storage
document.querySelector("html").setAttribute("data-bs-theme", localStorage.getItem('theme') || 'light');
document.querySelector("html").setAttribute('data-sidebar', localStorage.getItem('sidebarTheme') || 'light');
document.querySelector("html").setAttribute('data-color', localStorage.getItem('color') || 'primary');
document.querySelector("html").setAttribute('data-topbar', localStorage.getItem('topbar') || 'white');
document.querySelector("html").setAttribute('data-layout', localStorage.getItem('layout') || 'default');
document.querySelector("html").setAttribute('data-size', localStorage.getItem('size') || 'default');
document.querySelector("html").setAttribute('data-width', localStorage.getItem('width') || 'fluid');

let themesettings = `
<div class="sidebar-contact ">
    <div class="toggle-theme"  data-bs-toggle="offcanvas" data-bs-target="#theme-setting">
        <i class="fa-solid fa-gear ti-spin"></i></div>
    </div>
    <div class="sidebar-themesettings offcanvas offcanvas-end" id="theme-setting">
    <div class="offcanvas-header d-flex align-items-center justify-content-between bg-primary">
        <div>
            <h6 class="text-white mb-0">Theme Customizer</h6>
        </div>
        <a href="#" class="close d-flex align-items-center justify-content-center"  data-bs-dismiss="offcanvas"><i class="isax isax-close-circle"></i></a>
    </div>
    <div class="themesettings-inner offcanvas-body">
        <div class="accordion accordion-customicon1 accordions-items-seperate" id="settingtheme">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#layoutsetting" aria-expanded="true" aria-controls="collapsecustomicon1One">
                        Select Layouts <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="layoutsetting" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                     <div class="theme-content">
                        <div class="row gx-3">
                            <div class="col-4">
                                <div class="theme-layout mb-3">
                                    <input type="radio" name="LayoutTheme" id="defaultLayout" value="default" checked>
                                    <label for="defaultLayout">
                                        <span class="d-block mb-2 layout-img">
                                            <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                            <img src="assets/img/theme/default.svg" alt="img">
                                        </span>                                     
                                        <span class="layout-type">Default</span>
                                    </label>
                                </div>
                            </div>
                             <div class="col-4">
                                <div class="theme-layout mb-3">
                                    <input type="radio" name="LayoutTheme" id="singleLayout" value="single">
                                    <label for="singleLayout">
                                        <span class="d-block mb-2 layout-img">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                            <img src="assets/img/theme/single.svg" alt="img">
                                        </span>                                    
                                        <span class="layout-type">Single</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="theme-layout mb-3">
                                    <input type="radio" name="LayoutTheme" id="miniLayout" value="mini">
                                    <label for="miniLayout">
                                        <span class="d-block mb-2 layout-img">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                            <img src="assets/img/theme/mini.svg" alt="img">
                                        </span>                                    
                                        <span class="layout-type">Mini</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="theme-layout mb-3">
                                    <input type="radio" name="LayoutTheme" id="transparentLayout" value="transparent">
                                    <label for="transparentLayout">
                                        <span class="d-block mb-2 layout-img">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                            <img src="assets/img/theme/transparent.svg" alt="img">
                                        </span>                                    
                                        <span class="layout-type">Transparent</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="theme-layout mb-3">
                                    <input type="radio" name="LayoutTheme" id="without-headerLayout" value="without-header">
                                    <label for="without-headerLayout">
                                        <span class="d-block mb-2 layout-img">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                            <img src="assets/img/theme/without-header.svg" alt="img">
                                        </span>                                    
                                        <span class="layout-type">Without Header</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <a href="layout-rtl.html" class="theme-layout mb-3 text-center">
                                    <span class="d-block mb-2 layout-img">
                                        <img src="assets/img/theme/rtl.svg" alt="img">
                                    </span>                                    
                                    <span class="layout-type d-block">RTL</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarsetting" aria-expanded="true">
                        Layout Width <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="sidebarsetting" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <div class="theme-content">
                        <div class="d-flex align-items-center">
                            <div class="theme-width m-1 me-2">
                                <input type="radio" name="width" id="fluidWidth" value="fluid" checked>
                                <label for="fluidWidth" class="d-flex align-items-center rounded fs-12"><i class="isax isax-row-vertical me-1"></i>Fluid Layout
                                </label>
                            </div>
                            <div class="theme-width m-1">
                                <input type="radio" name="width" id="boxWidth" value="box">
                                <label for="boxWidth" class="d-flex align-items-center rounded fs-12"><i class="isax isax-slider-vertical me-1"></i>Boxed Layout
                                </label>
                            </div>
                        </div>  
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarcolorsetting" aria-expanded="true">
                        Sidebar Color <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="sidebarcolorsetting" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                     <div class="theme-content">
                     <h6 class="fs-14 fw-medium mb-2">Solid Colors</h6>
                       <div class="d-flex align-items-center flex-wrap">
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="lightSidebar" value="light" checked>
                                <label for="lightSidebar" class="d-block rounded mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="sidebar2Sidebar" value="sidebar2">
                                <label for="sidebar2Sidebar" class="d-block rounded bg-white mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="sidebar3Sidebar" value="sidebar3">
                                <label for="sidebar3Sidebar" class="d-block rounded bg-dark mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="sidebar4Sidebar" value="sidebar4">
                                <label for="sidebar4Sidebar" class="d-block rounded bg-primary mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="sidebar5Sidebar" value="sidebar5">
                                <label for="sidebar5Sidebar" class="d-block rounded bg-secondary mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="sidebar6Sidebar" value="sidebar6">
                                <label for="sidebar6Sidebar" class="d-block rounded bg-info mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>    
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="sidebar7Sidebar" value="sidebar7">
                                <label for="sidebar7Sidebar" class="d-block rounded bg-success mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>      
                        </div>
                        <h6 class="fs-14 fw-medium mb-2">Gradient Colors</h6>
                       <div class="d-flex align-items-center flex-wrap">
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="gradientsidebar1Sidebar" value="gradientsidebar1">
                                <label for="gradientsidebar1Sidebar" class="d-block rounded bg-primary bg-gradient mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="gradientsidebar2Sidebar" value="gradientsidebar2">
                                <label for="gradientsidebar2Sidebar" class="d-block rounded bg-secondary bg-gradient mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="gradientsidebar3Sidebar" value="gradientsidebar3">
                                <label for="gradientsidebar3Sidebar" class="d-block rounded bg-success bg-gradient mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="gradientsidebar4Sidebar" value="gradientsidebar4">
                                <label for="gradientsidebar4Sidebar" class="d-block rounded bg-info bg-gradient mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="gradientsidebar5Sidebar" value="gradientsidebar5">
                                <label for="gradientsidebar5Sidebar" class="d-block rounded bg-dark bg-gradient mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect m-1 me-2">
                                <input type="radio" name="sidebar" id="gradientsidebar6Sidebar" value="gradientsidebar6">
                                <label for="gradientsidebar6Sidebar" class="d-block rounded bg-danger bg-gradient mb-2">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>    
                        </div>
                    </div>
                    </div>
                </div>
            </div>    
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sizesetting" aria-expanded="true" aria-controls="collapsecustomicon1One">
                        Sidebar Size <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="sizesetting" class="accordion-collapse collapse show">
                    <div class="accordion-body pb-0">
                     <div class="theme-content">
                        <div class="row gx-3">
                            <div class="col-4">
                                <div class="theme-layout mb-3">
                                    <input type="radio" name="size" id="defaultSize" value="default" checked>
                                    <label for="defaultSize">
                                        <span class="d-block mb-2 layout-img">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                            <img src="assets/img/theme/default.svg" alt="img">
                                        </span>                                     
                                        <span class="layout-type">Default</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="theme-layout mb-3">
                                    <input type="radio" name="size" id="singleSize" value="single">
                                    <label for="singleSize">
                                        <span class="d-block mb-2 layout-img">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                            <img src="assets/img/theme/single.svg" alt="img">
                                        </span>                                    
                                        <span class="layout-type">Single</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="theme-layout mb-3">
                                    <input type="radio" name="size" id="compactSize" value="compact">
                                    <label for="compactSize">
                                        <span class="d-block mb-2 layout-img">
                                        <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                            <img src="assets/img/theme/mini.svg" alt="img">
                                        </span>                                    
                                        <span class="layout-type">Compact</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#colorsetting" aria-expanded="true">
                        Top Bar Color <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="colorsetting" class="accordion-collapse collapse show">
                    <div class="accordion-body pb-1">
                     <div class="theme-content">
                     <h6 class="fs-14 fw-medium mb-2">Solid Colors</h6>
                       <div class="d-flex align-items-center flex-wrap topbar-background">
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="whiteTopbar" value="white" checked>
                                <label for="whiteTopbar" class="white-topbar">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="topbar1Topbar" value="topbar1">
                                <label for="topbar1Topbar" class="bg-light"><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div>
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="topbar2Topbar" value="topbar2">
                                <label for="topbar2Topbar" class="bg-dark"><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div>
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="topbar3Topbar" value="topbar3">
                                <label for="topbar3Topbar" class="bg-primary"><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div>
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="topbar4Topbar" value="topbar4">
                                <label for="topbar4Topbar" class="bg-secondary"><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div>                   
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="topbar5Topbar" value="topbar5">
                                <label for="topbar5Topbar" class="bg-info"><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div>                   
                            <div class="theme-colorselect mb-3">
                                <input type="radio" name="topbar" id="topbar6Topbar" value="topbar6">
                                <label for="topbar6Topbar" class="bg-success"><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div> 
                        </div>
                        <h6 class="fs-14 fw-medium mb-2">Gradient Colors</h6>
                       <div class="d-flex align-items-center flex-wrap topbar-background">
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="gradienttopbar1Topbar" value="gradienttopbar1">
                                <label for="gradienttopbar1Topbar" class="bg-primary bg-gradient">
                                    <span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="gradienttopbar2Topbar" value="gradienttopbar2">
                                <label for="gradienttopbar2Topbar" class="bg-secondary bg-gradient "><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div>
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="gradienttopbar3Topbar" value="gradienttopbar3">
                                <label for="gradienttopbar3Topbar" class="bg-success bg-gradient"><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div>
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="gradienttopbar4Topbar" value="gradienttopbar4">
                                <label for="gradienttopbar4Topbar" class="bg-info bg-gradient"><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div>
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="gradienttopbar5Topbar" value="gradienttopbar5">
                                <label for="gradienttopbar5Topbar" class="bg-dark bg-gradient"><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div>                   
                            <div class="theme-colorselect mb-3 me-3">
                                <input type="radio" name="topbar" id="gradienttopbar6Topbar" value="gradienttopbar6">
                                <label for="gradienttopbar6Topbar" class="bg-danger bg-gradient"><span class="theme-check rounded-circle"><i class="fa-solid fa-check"></i></span></label>
                            </div>                  
                        </div>
                    </div>
                 </div>
                </div>
            </div>      
		    
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarbgsetting" aria-expanded="true">
                        Sidebar Background <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="sidebarbgsetting" class="accordion-collapse collapse show">
                    <div class="accordion-body pb-1">
                     <div class="theme-content">
                     <h6 class="fs-14 fw-medium mb-2">Pattern</h6>
                       <div class="d-flex align-items-center flex-wrap">
                            <div class="theme-sidebarbg me-3 mb-3">                            
                           
                                <input type="radio" name="sidebarbg" id="sidebarBg1" value="sidebarbg1">
                                <label for="sidebarBg1" class="d-block rounded">
                                 <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    <img src="assets/img/theme/sidebar-bg-01.svg" alt="img" class="rounded">
                                </label>
                            </div>
                            <div class="theme-sidebarbg me-3 mb-3">
                                <input type="radio" name="sidebarbg" id="sidebarBg2" value="sidebarbg2">
                                <label for="sidebarBg2" class="d-block rounded">
                                 <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    <img src="assets/img/theme/sidebar-bg-02.svg" alt="img" class="rounded">
                                </label>
                            </div>
                            <div class="theme-sidebarbg me-3 mb-3">
                                <input type="radio" name="sidebarbg" id="sidebarBg3" value="sidebarbg3">
                                <label for="sidebarBg3" class="d-block rounded">
                                 <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    <img src="assets/img/theme/sidebar-bg-03.svg" alt="img" class="rounded">
                                </label>
                            </div>
                            <div class="theme-sidebarbg me-3 mb-3">
                                <input type="radio" name="sidebarbg" id="sidebarBg4" value="sidebarbg4">
                                <label for="sidebarBg4" class="d-block rounded">
                                 <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    <img src="assets/img/theme/sidebar-bg-04.svg" alt="img" class="rounded">
                                </label>
                            </div>
                            <div class="theme-sidebarbg me-3 mb-3">
                                <input type="radio" name="sidebarbg" id="sidebarBg5" value="sidebarbg5">
                                <label for="sidebarBg5" class="d-block rounded">
                                 <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    <img src="assets/img/theme/sidebar-bg-05.svg" alt="img" class="rounded">
                                </label>
                            </div>
                            <div class="theme-sidebarbg mb-3">
                                <input type="radio" name="sidebarbg" id="sidebarBg6" value="sidebarbg6">
                                <label for="sidebarBg6" class="d-block rounded">
                                 <span class="theme-check2 rounded-circle"><i class="fa-solid fa-check"></i></span>
                                    <img src="assets/img/theme/sidebar-bg-06.svg" alt="img" class="rounded">
                                </label>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>    
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarcolor" aria-expanded="true">
                        Theme Colors <i class="ti ti-circle-chevron-up ms-auto text-primary"></i>
                    </button>
                </h2>
                <div id="sidebarcolor" class="accordion-collapse collapse show">
                    <div class="accordion-body pb-2">
                     <div class="theme-content">
                       <div class="d-flex align-items-center flex-wrap">
                            <div class="theme-colorsset me-2 mb-2">
                                <input type="radio" name="color" id="primaryColor" value="primary" checked>
                                <label for="primaryColor" class="primary-clr"></label>
                            </div>
                            <div class="theme-colorsset me-2 mb-2">
                                <input type="radio" name="color" id="secondaryColor" value="secondary">
                                <label for="secondaryColor" class="secondary-clr"></label>
                            </div>
                            <div class="theme-colorsset me-2 mb-2">
                                <input type="radio" name="color" id="successColor" value="success">
                                <label for="successColor" class="success-clr"></label>
                            </div>
                            <div class="theme-colorsset me-2 mb-2">
                                <input type="radio" name="color" id="dangerColor" value="danger">
                                <label for="dangerColor" class="danger-clr"></label>
                            </div>
                            <div class="theme-colorsset me-2 mb-2">
                                <input type="radio" name="color" id="infoColor" value="info">
                                <label for="infoColor" class="info-clr"></label>
                            </div>
                            <div class="theme-colorsset me-2 mb-2">
                                <input type="radio" name="color" id="warningColor" value="warning">
                                <label for="warningColor" class="warning-clr"></label>
                            </div>  
                        </div>
                         </div>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
        <div class="p-3 border-top">
            <div class="row gx-3">
                <div class="col-6">
                    <a href="#" id="resetbutton" class="btn btn-light close-theme w-100"><i class="ti ti-restore me-1"></i>Reset</a>
                </div>
                <div class="col-6">
                    <a href="#" class="btn btn-primary w-100" data-bs-dismiss="offcanvas"><i class="ti ti-shopping-cart-plus me-1"></i>Buy Product</a>
                </div>
            </div>
        </div>    
    </div> `
    
    document.addEventListener("DOMContentLoaded", function() {

    document.body.insertAdjacentHTML('beforeend', themesettings);

    const darkModeToggle = document.getElementById("dark-mode-toggle");
	const lightModeToggle = document.getElementById("light-mode-toggle");

	// Detect stored mode
	const darkMode = localStorage.getItem("darkMode");

	function enableDarkMode() {
		document.documentElement.setAttribute("data-bs-theme", "dark");
		darkModeToggle?.classList.remove("activate");
		lightModeToggle?.classList.add("activate");
		localStorage.setItem("darkMode", "enabled");
	}

	function disableDarkMode() {
		document.documentElement.setAttribute("data-bs-theme", "light");
		lightModeToggle?.classList.remove("activate");
		darkModeToggle?.classList.add("activate");
		localStorage.setItem("darkMode", "disabled");
	}

	// Initialize on page load
	if (darkMode === "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}

	// Attach event listeners
	darkModeToggle?.addEventListener("click", enableDarkMode);
	lightModeToggle?.addEventListener("click", disableDarkMode);

        // const themeRadios = document.querySelectorAll('input[name="theme"]');
        const sidebarRadios = document.querySelectorAll('input[name="sidebar"]');
        const colorRadios = document.querySelectorAll('input[name="color"]');
        const layoutRadios = document.querySelectorAll('input[name="LayoutTheme"]');
        const topbarRadios = document.querySelectorAll('input[name="topbar"]');
        const sidebarBgRadios = document.querySelectorAll('input[name="sidebarbg"]');
        const sizeRadios = document.querySelectorAll('input[name="size"]');
        const widthRadios = document.querySelectorAll('input[name="width"]');
        const topbarbgRadios = document.querySelectorAll('input[name="topbarbg"]');
        const resetButton = document.getElementById('resetbutton');
        const sidebarBgContainer = document.getElementById('sidebarbgContainer');
        const sidebarElement = document.querySelector('.sidebar'); // Adjust this selector to match your sidebar element
    
        function setThemeAndSidebarTheme(theme, sidebarTheme, color, layout, topbar, size, width) {
            // Check if the sidebar element exists
            if (!sidebarElement) {
                console.error('Sidebar element not found');
                return;
            }
    
            // Setting data attributes and classes
            document.documentElement.setAttribute('data-bs-theme', theme);
            document.documentElement.setAttribute('data-sidebar', sidebarTheme);
            document.documentElement.setAttribute('data-color', color);
            document.documentElement.setAttribute('data-layout', layout);
            document.documentElement.setAttribute('data-topbar', topbar);
            document.documentElement.setAttribute('data-size', size);
            document.documentElement.setAttribute('data-width', width);
    
            //track mini-layout set or not
            layout_mini = 0;
            if (layout === 'mini') {
                document.body.classList.add("mini-sidebar");
                document.body.classList.remove("menu-horizontal");
                layout_mini = 1;
            }  else if (layout === 'horizontal') {
                document.body.classList.add("menu-horizontal");
                document.body.classList.remove("mini-sidebar");
            } else if (layout === 'horizontal-single') {
                document.body.classList.add("menu-horizontal");
                document.body.classList.remove("mini-sidebar");
            } else if (layout === 'horizontal-overlay') {
                document.body.classList.add("menu-horizontal");
                document.body.classList.remove("mini-sidebar");
            } else {
                document.body.classList.remove("mini-sidebar", "menu-horizontal");
            }

            
            if (size === 'compact') {
                document.body.classList.add("mini-sidebar");
                document.body.classList.remove("expand-menu");
                layout_mini = 1;
            } else if (size === 'hoverview') {
                document.body.classList.add("expand-menu");
                if(layout_mini == 0){ //remove only mini sidebar not set
                    document.body.classList.remove("mini-sidebar");
                }
            }  else  {
                if(layout_mini == 0){ //remove only mini sidebar not set
                    document.body.classList.remove("mini-sidebar");
                }
                document.body.classList.remove("expand-menu");
            }

            if (width === 'box') {
                document.body.classList.add("layout-box-mode");
                document.body.classList.add("mini-sidebar");
                layout_mini = 1;
            }else {
                if(layout_mini == 0){ //remove only mini sidebar not set
                    document.body.classList.remove("mini-sidebar");
                }
                document.body.classList.remove("layout-box-mode");
            }
            if (((width === 'box') && (layout === 'horizontal')) || ((width === 'box') && (layout === 'horizontal-overlay')) ||
            ((width === 'box') && (layout === 'horizontal-single')) || ((width === 'box') && (layout === 'without-header'))) {
                    document.body.classList.remove("mini-sidebar");
            }
            
            // Saving to localStorage
            localStorage.setItem('theme', theme);
            localStorage.setItem('sidebarTheme', sidebarTheme);
            localStorage.setItem('color', color);
            localStorage.setItem('layout', layout);
            localStorage.setItem('topbar', topbar);
            localStorage.setItem('size', size);
            localStorage.setItem('width', width);
    
            // Show/hide sidebar background options based on layout selection
            if (layout === 'box' && sidebarBgContainer) {
                sidebarBgContainer.classList.add('show');
            } else if (sidebarBgContainer) {
                sidebarBgContainer.classList.remove('show');
            }
        }
    
        function handleSidebarBgChange() {
            const sidebarBg = document.querySelector('input[name="sidebarbg"]:checked') ? document.querySelector('input[name="sidebarbg"]:checked').value : null;
    
            if (sidebarBg) {
                document.body.setAttribute('data-sidebarbg', sidebarBg);
                localStorage.setItem('sidebarBg', sidebarBg);
            } else {
                document.body.removeAttribute('data-sidebarbg');
                localStorage.removeItem('sidebarBg');
            }
        }
    
        function handleInputChange() {
           // const theme = 'light'
           const theme = localStorage.getItem('darkMode') === 'enabled' ? 'dark' : 'light';

            const layout = document.querySelector('input[name="LayoutTheme"]:checked').value;
            const size = document.querySelector('input[name="size"]:checked').value;
            const width = document.querySelector('input[name="width"]:checked').value;

            
            color = localStorage.getItem('primaryRGB');
            sidebarTheme = localStorage.getItem('sidebarRGB');
            topbar = localStorage.getItem('topbarRGB');
            
            if(document.querySelector('input[name="color"]:checked') != null)
            {
                color = document.querySelector('input[name="color"]:checked').value;
            }else{
                color = 'all'
            }

            if(document.querySelector('input[name="sidebar"]:checked') != null)
            {
                sidebarTheme = document.querySelector('input[name="sidebar"]:checked').value;
            }else{
                sidebarTheme = 'all'
            }

            if(document.querySelector('input[name="topbar"]:checked') != null)
            {
                topbar = document.querySelector('input[name="topbar"]:checked').value;
            }else{
                topbar = 'all'
            }
    
            setThemeAndSidebarTheme(theme, sidebarTheme, color, layout, topbar, size, width);
        }

      
    
        function resetThemeAndSidebarThemeAndColorAndBg() {
            setThemeAndSidebarTheme('light', 'light', 'primary', 'default', 'white', 'default', 'fluid');
            document.body.removeAttribute('data-sidebarbg');

            // ✅ Set data-bs-theme="light" on <html>
            document.documentElement.setAttribute('data-bs-theme', 'light');

            // ✅ Fix: remove darkMode key from localStorage
            localStorage.removeItem('darkMode');

            document.getElementById('light-mode-toggle')?.classList.remove('activate');
            document.getElementById('dark-mode-toggle')?.classList.add('activate');
            document.getElementById('lightSidebar').checked = true;
            document.getElementById('primaryColor').checked = true;
            document.getElementById('defaultLayout').checked = true;
            document.getElementById('whiteTopbar').checked = true;
            document.getElementById('defaultSize').checked = true;
            document.getElementById('fluidWidth').checked = true;
    
            const checkedSidebarBg = document.querySelector('input[name="sidebarbg"]:checked');
            if (checkedSidebarBg) {
                checkedSidebarBg.checked = false;
            }
    
            localStorage.removeItem('sidebarBg');
        }
    
        // Adding event listeners
        sidebarRadios.forEach(radio => radio.addEventListener('change', handleInputChange));
        colorRadios.forEach(radio => radio.addEventListener('change', handleInputChange));
        layoutRadios.forEach(radio => radio.addEventListener('change', handleInputChange));
        topbarRadios.forEach(radio => radio.addEventListener('change', handleInputChange));
        sizeRadios.forEach(radio => radio.addEventListener('change', handleInputChange));
        widthRadios.forEach(radio => radio.addEventListener('change', handleInputChange));
        sidebarBgRadios.forEach(radio => radio.addEventListener('change', handleSidebarBgChange));
        topbarbgRadios.forEach(radio => radio.addEventListener('change', handleTopbarBgChange));
        resetButton.addEventListener('click', resetThemeAndSidebarThemeAndColorAndBg);
    
        // Initial setup from localStorage
        const savedTheme = localStorage.getItem('darkMode') === 'enabled' ? 'dark' : 'light';

        savedSidebarTheme = localStorage.getItem('sidebarTheme');
        savedColor = localStorage.getItem('color');
        const savedLayout = localStorage.getItem('layout') || 'default';
        savedTopbar = localStorage.getItem('topbar');
        const savedSize = localStorage.getItem('size') || 'default';
        const savedWidth = localStorage.getItem('width') || 'fluid';
        const savedSidebarBg = localStorage.getItem('sidebarBg') || null;
        const savedTopbarBg = localStorage.getItem('topbarbg') || null;

        // setup theme color all
        const savedColorPickr = localStorage.getItem('primaryRGB') 
        if((savedColor == null) && (savedColorPickr == null))
        {
            savedColor = 'primary';
        }else if((savedColorPickr != null) && (savedColor == null))
        {
            savedColor = 'all';
            let html = document.querySelector("html");
            html.style.setProperty("--primary-rgb",  savedColorPickr);
        }

        // setup theme topbar all
        const savedTopbarPickr = localStorage.getItem('topbarRGB') 
        if((savedTopbar == null) && (savedTopbarPickr == null))
        {
            savedTopbar = 'white';
        }else if((savedTopbarPickr != null) && (savedTopbar == null))
        {
            savedTopbar = 'all';
            let html = document.querySelector("html");
            html.style.setProperty("--topbar-rgb",  savedTopbarPickr);
        }
 
        // setup theme color all
        const savedSidebarPickr = localStorage.getItem('sidebarRGB') 
        if((savedSidebarTheme == null) && (savedSidebarPickr == null))
        {
            savedSidebarTheme = 'light';
        } else if((savedSidebarPickr != null) && (savedSidebarTheme == null))
        {
           savedSidebarTheme = 'all';
            let html = document.querySelector("html");
            html.style.setProperty("--sidebar-rgb",  savedSidebarPickr);
        }
    
        setThemeAndSidebarTheme(savedTheme, savedSidebarTheme, savedColor, savedLayout, savedTopbar, savedSize, savedWidth);
    
        if (savedSidebarBg) {
            document.body.setAttribute('data-sidebarbg', savedSidebarBg);
        } else {
            document.body.removeAttribute('data-sidebarbg');
        }

        if (savedTopbarBg) {
            document.body.setAttribute('data-topbarbg', savedTopbarBg);
        } else {
            document.body.removeAttribute('data-topbarbg');
        }
    
        // Check and set radio buttons based on saved preferences
        if (document.getElementById(`${savedTheme}Theme`)) {
            document.getElementById(`${savedTheme}Theme`).checked = true;
        }
        if (document.getElementById(`${savedSidebarTheme}Sidebar`)) {
            document.getElementById(`${savedSidebarTheme}Sidebar`).checked = true;
        }
        if (document.getElementById(`${savedColor}Color`)) {
            document.getElementById(`${savedColor}Color`).checked = true;
        }
        if (document.getElementById(`${savedLayout}Layout`)) {
            document.getElementById(`${savedLayout}Layout`).checked = true;
        }
        if (document.getElementById(`${savedTopbar}Topbar`)) {
            document.getElementById(`${savedTopbar}Topbar`).checked = true;
        }
        if (document.getElementById(`${savedSize}Size`)) {
            document.getElementById(`${savedSize}Size`).checked = true;
        }
        if (document.getElementById(`${savedWidth}Width`)) {
            document.getElementById(`${savedWidth}Width`).checked = true;
        }
        if (savedSidebarBg && document.getElementById(`${savedSidebarBg}`)) {
            document.getElementById(`${savedSidebarBg}`).checked = true;
        }
        if (savedTopbarBg && document.getElementById(`${savedTopbarBg}`)) {
            document.getElementById(`${savedTopbarBg}`).checked = true;
        }
    
        // Initially hide sidebar background options based on layout
        if (savedLayout !== 'box' && sidebarBgContainer) {
            sidebarBgContainer.classList.remove('show');
        }
    });
    