@extends('employer_master')
@section('content')
<div class="row">
  <div class="col-md-12 careerfy-typo-wrap">
    <div class="careerfy-employer-dasboard">
      
        <!-- Profile Title -->
        <h3 class="form_heading">Order Detail</h3>
        <div class="invoice">
        <div class="row">
          <div class="col-12">
            <h2 class="page-header">
            <img src="{{asset('image/'.$data['logo'])}}" width="200px;">
            <small class="pull-right">Date: {{$data['order']->created_at}}<br><b>Invoice No. #{{$data['order']->invoice_no}}</b></small>
            
            </h2>
          </div>
          <!-- /.col -->
        </div>
        <!-- info row -->
        <div class="row invoice-info">
          <div class="col-sm-4 invoice-col">
            From
            <address>
              <strong>{{$data['store']}}</strong><br>
              {{$data['store_address']}}<br>
              
              Phone: {{$data['store_phone']}}<br>
              Email: {{$data['store_email']}}
            </address>
          </div>
          <!-- /.col -->
          <div class="col-sm-4 invoice-col">
            
          </div>
          <!-- /.col -->
          <div class="col-sm-4 invoice-col">
            
            To
            <address>
              <strong>{{$data['order']->customer_name}}</strong><br>
              
              Phone: {{$data['order']->telephone}}<br>
              Email: {{$data['order']->email}}
            </address>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <div class="row">
              <div class="col-xs-12 table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      <th>Product</th>
                      <th>Product Type </th>
                      <th>Duration</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    @php($i = 1)
                    @foreach($data['order']->orderItem as $item)
                    <tr>
                      <td>{{$i++}}</td>
                      <td>{{$item->name}}</td>
                      <td>{{$item->product_type}}</td>
                      <td>{{$item->duration}} {{$item->type == 'MemberUpgrade' ? 'Month(s)' : 'Day(s)'}}</td>
                      <td>Rs. {{$item->amount}}</td>
                    </tr>
                    @endforeach
                    <tfoot>
                    <tr>
                      <td colspan="4"><strong style="float: right;">Grand Total:</strong></td>
                      <td><strong>Rs. {{$data['order']->amount}}</strong></td>
                    </tr>
                    </tfoot>
                  </tbody>
                </table>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
            <div class="row">
              <p class="col-12 text-muted well well-sm no-shadow" style="margin-top: 10px;">
                {{$data['order']->comment}}
              </p>
              
              <p class="lead">Order History:</p>
              <div class="col-xs-12 table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      
                      <th>Date</th>
                      <th>Comment </th>
                      <th>Status</th>
                      
                      <th>Document</th>
                    </tr>
                  </thead>
                  <tbody>
                    @php($i = 1)
                    @foreach($data['order']->orderHistory as $history)
                    <tr>
                      
                      <td>{{$history->created_at}}</td>
                      <td>{{$history->comment}}</td>
                      <td>{{$history->order_status}}</td>
                      
                      <td>
                        @if($history->document != '')
                        <a href="{{url('image/checkout/'.$history->document)}}" target="_blank" class="btn btn-default"><i class="fa fa-download"></i> Download</a>
                        @endif
                      </td>
                    </tr>
                    @endforeach
                    
                  </tbody>
                </table>
              </div>
            </div>
            
      </div>
    </div>
  </div>
</div>
<div class="invoice">
<p class="lead">Add History:</p>
            <form class="dash_forms" enctype="multipart/form-data" role="form" id="testform" method="POST" action="{{ url('/employer/order/add-history') }}">
              {!! csrf_field() !!}
              <input type="hidden" name="order_id" value="{{$data['order']->id}}">
              <div class="form-group row ">
                <div class="col-md-12 {{ $errors->has('comment') ? ' has-error' : '' }}">
                  <label class="required">comment</label>
                   <textarea class="form-control" name="comment">{{old('comment')}}</textarea>
                  @if ($errors->has('comment'))
                    <span class="help-block">
                      <strong>{{ $errors->first('comment') }}</strong>
                    </span>
                  @endif
                </div>
               
                
              </div>
              <div class="form-group row ">
                <div class="col-md-12 {{ $errors->has('file') ? ' has-error' : '' }}">
                  <label>file</label>
                   <input type="file" name="file" class="form-control">
                  @if ($errors->has('file'))
                    <span class="help-block">
                      <strong>{{ $errors->first('file') }}</strong>
                    </span>
                  @endif
                </div>
               
                
              </div>
              
               <div class="form-group row">
            <div class="col-md-12">
              <button type="submit" class="btn sendbtn bluebg" style="padding: 10px;">Submit <i class="fa fa-paper-plane"></i></button>
            </div>
          </div>
             
            </form>
            <!-- this row will not appear when printing -->
            <div class="row no-print">
              <div class="col-12">
                <a href="{{url('employer/order/print/'.$data['order']->id)}}" target="_blank" class="btn btn-default"><i class="fa fa-print"></i> Print</a>
                
                
              </div>
            </div>
          </div>
@endsection
