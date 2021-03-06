<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title> Online-Exhibition | Invoice</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

   <link rel="stylesheet" href="<?php echo e(asset('assets/bootstrap/css/bootstrap.min.css')); ?>">
    <!-- Font Awesome -->
     <link rel="stylesheet" href="<?php echo e(asset('assets/dist/css/font-awesome.css')); ?>">
    <!-- Ionicons -->
     <link rel="stylesheet" href="<?php echo e(asset('assets/dist/css/ionicons.css')); ?>">
    <!-- Theme style -->
    <link rel="stylesheet" href="<?php echo e(asset('assets/dist/css/AdminLTE.min.css')); ?>">




  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
<body onload="window.print();">
<div class="wrapper">
  <!-- Main content -->
    <section class="invoice">
    <!-- title row -->
        <div class="row">
            <div class="col-xs-12">
            <h2 class="page-header">
                <img src="<?php echo e(asset('image/'.$data['logo'])); ?>" style="width: 200px;">
                <small class="pull-right">Date: <?php echo e($data['invoice']->created_at); ?><br><b>Invoice No. #<?php echo e($data['invoice']->invoice_no); ?></b></small>
            </h2>
            </div>
            <!-- /.col -->
        </div>
        <div class="row invoice-info">
            <div class="col-sm-4 invoice-col">
                From
                <address>
                    <strong><?php echo e($data['store']); ?></strong><br>
                    <?php echo e($data['store_address']); ?><br>

                    Phone: <?php echo e($data['store_phone']); ?><br>
                    Email: <?php echo e($data['store_email']); ?>

                </address>
            </div>
        <!-- /.col -->
            <div class="col-sm-4 invoice-col">

            </div>
        <!-- /.col -->
            <div class="col-sm-4 invoice-col">
                To
                <address>
                    <strong><?php echo e($data['invoice']->company_name); ?></strong><br>
                    Email: <?php echo e($data['invoice']->email); ?><br>
                    Phone: <?php echo e($data['invoice']->telephone); ?>

                </address>

            </div>
        <!-- /.col -->
        </div>
      <!-- /.row -->

      <!-- Table row -->
        <div class="row">
            <div class="col-xs-12 table-responsive">
                <table class="table table-striped">
                    <thead style="background-color: #ddd; text-align: left;">
                        <tr>
                        <th style="padding:5px;">S.N.</th>
                        <th style="padding:5px;">Product Type</th>
                        <th style="padding:5px;">Category</th>
                        <th style="padding:5px;">Booth/Stall Name</th>
                        <th style="padding:5px;">Booth/Stall Type</th>
                        <th style="padding:5px;">Amount </th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php ($i = 1); ?>
                        <?php $__currentLoopData = $data['invoice']->enrollinvoiceItem; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <td style="padding:5px;"><?php echo e($i++); ?></td>
                            <td style="padding:5px;"><?php echo e($item->type); ?></td>
                            <td style="padding:5px;"><?php echo e($item->category); ?></td>
                            <td style="padding:5px;"><?php echo e($item->booth_name); ?></td>
                            <td style="padding:5px;"><?php echo e($item->booth_type); ?></td>
                            <td style="padding:5px;">Rs. <?php echo e($item->amount); ?> </td>
                        </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <tfoot>
                        <tr>
                            <td colspan="5"><strong style="float: right;">Grand Total:</strong></td>
                            <td><strong>Rs. <?php echo e($data['invoice']->amount); ?></strong></td>
                        </tr>
                        </tfoot>
                    </tbody>
                </table>
            </div>
        <!-- /.col -->
        </div>
      <!-- /.row -->
    </section>
  <!-- /.content -->
</div>
<!-- ./wrapper -->
</body>
</html>
<?php /**PATH C:\xampp\htdocs\rollingnexus\local\resources\views/employer/invoice/print.blade.php ENDPATH**/ ?>