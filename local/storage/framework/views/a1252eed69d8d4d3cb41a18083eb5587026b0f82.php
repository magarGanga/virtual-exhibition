<!DOCTYPE html>
<html lang="en">

<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">

 <title><?php echo e(config('app.meta_title')); ?></title>

<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="author" content="<?php echo e(\App\library\Settings::getSettings()->name); ?>">
        <meta name="copyright" content="&amp;copy; 2000-<?php echo date('Y').' '.\App\library\Settings::getSettings()->name;?>">
        <meta name="keywords" content="<?php echo e(config('app.meta_keyword')); ?>">
        <meta name="description" content="<?php echo e(config('app.meta_description')); ?>">
        <meta property="og:url"  content="<?php echo e(config('app.meta_url')); ?>" />
        <meta property="og:type"  content="<?php echo e(config('app.meta_type')); ?>" />
        <meta property="og:title"  content="<?php echo e(config('app.meta_title')); ?>" />
        <meta property="og:description" content="<?php echo e(config('app.meta_description')); ?>" />
        <meta property="og:image"       content="<?php echo e(config('app.meta_image')); ?>" />
         <meta name='robots' content='index,follow' />
         <meta name="theme-color" content="#002A5B">
         <?php
         $icon = \App\library\Settings::getIcon();
          if(!empty($icon)) { ?>
        <link href="<?php echo e(asset($icon)); ?>" rel="icon">
        <link rel="shortcut icon" type="image/png" href="<?php echo e(asset($icon)); ?>"/>
        <?php }?>
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('css/bootstrap.css')); ?>">
<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.4.1/css/all.css" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('css/component.css')); ?>" />
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('css/aos.css')); ?>">
<link rel="stylesheet" href="<?php echo e(asset('css/responsive.css')); ?>">
<link rel="stylesheet" href="<?php echo e(asset('css/styles.css')); ?>">
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Euphoria+Script" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">


<!-- <link href="//fonts.googleapis.com/css?family=Quicksand:300,400,500,700&amp;" rel="stylesheet"> -->
<link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900' rel='stylesheet'>
<script src="//code.iconify.design/1/1.0.0-rc3/iconify.min.js"></script>
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="100">
	<?php echo csrf_field(); ?>

	<?php echo $__env->yieldContent('header'); ?>

	<?php echo $__env->yieldContent('banner'); ?>

	 <!-- Main content -->

          <?php if(Session::has('alert-danger') || Session::has('alert-success')): ?>
          <div class="row">
            <div class="col-xs-12">
              <?php if(Session::has('alert-danger')): ?>
              <div class="alert alert-danger"><?php echo e(Session::get('alert-danger')); ?></div>
              <?php endif; ?>
              <?php if(Session::has('alert-success')): ?>
              <div class="alert alert-success"><?php echo e(Session::get('alert-success')); ?></div>
              <?php endif; ?>

            </div>

          </div>
          <?php endif; ?>

          <!-- Default box -->
         <?php echo $__env->yieldContent('content'); ?>

		<?php echo $__env->make('front/common/footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
		<!-- footer section ended here -->

		<section class="btmfooter">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-3">
						<div class="social_link">
							<span><a href="#" class="blueclr"><i class="fab fa-facebook-square"></i></a>
							<a href="#" class="blueclr"><i class="fab fa-twitter-square"></i></a></span>
						</div>
					</div>
					<div class="col-md-6 col-9">
						<p><?php echo e(date('Y')); ?> All Rights with <a href="#" class="blueclr"><?php echo e(\App\library\Settings::getSettings()->name); ?></a></p>
					</div>
				</div>
			</div>
			<a class="topbtmicon" href="#top"><i class="fa fa-chevron-up"></i></a>
		</section>
		<!-- footer navigation ended here -->
<?php echo $__env->make('front/common/popuplogin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<!-- Scripts -->
<script src='<?php echo e(asset("js/jquery-3.1.1.min.js")); ?>'></script>
<script type="text/javascript">
    /***************** show and hide header ******************/
    $(window).scroll(function() {
    if ($(".header").offset().top > 50) {
        $(".header").addClass("showheader");
    } else {
        $(".header").removeClass("showheader");
    }

    if ($(".header").offset().top > 1500) {
        $(".topbtmicon").addClass("display");
    } else {
        $(".topbtmicon").removeClass("display");
    }
	});
</script>
<script>
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $(" .nexusmenu ul li a, .navbar a, .gototopbtn, #mr,.topheader, .topbtmicon").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });

      } // End if
    });
  	$(window).scrollTop(0); //while refresh scroll to top function by bna
  	$('#alert_box').modal('show');
  });
</script>
<script src="<?php echo e(asset('js/bootstrap.min.js')); ?>"></script>

<script type="text/javascript">
    $('#individual-button').on('click', function()
    {
        $('#employee-login-form').submit();
    });
     $('#business-button').on('click', function()
    {
        $('#employer-login-form').submit();
    });
</script>
<script src="<?php echo e(asset('js/aos.js')); ?>"></script>
<script src="<?php echo e(asset('js/main.js')); ?>"></script>
<?php ($setting= \App\library\Settings::getSettings()); ?>
<script type="text/javascript">
    (function () {
        var options = {
            facebook: "rollingplans", // Facebook page ID
            email: "<?php echo e($setting->email); ?>", // Email
            call: "<?php echo e($setting->telephone); ?>", // Call phone number
            company_logo_url: "<?php echo e(\App\library\Settings::getLogo()); ?>", // URL of company logo (png, jpg, gif)
            greeting_message: "Hello, how may we help you? Just send us a message now to get assistance.", // Text of greeting message
            call_to_action: "Meet us", // Call to action
            button_color: "#541547", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "facebook,call,email" // Order of buttons
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
</script>
<?php echo \App\library\Settings::getSettings()->google_analytics;?>
<?php echo $__env->make('front/common/tutorial', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</body>
</html>
<?php /**PATH C:\xampp\htdocs\rollingnexus\local\resources\views/front/front-master.blade.php ENDPATH**/ ?>