@extends('front.event-master')
@section('content')
    <style>
        #payments{
            padding-left:15px;
        }
        .payment-container{
            height:53vh;
        }
    </style>
    <div class="row tp10p cm10-row">
        <div class="col-md-12">
            <div class="common_bg tp10m">
                <div class="job_cat_title">
                    <i class="fas fa-grip-vertical"></i> Checkout {!! csrf_field() !!}
                </div>
                <div class="careerfy-employee-dasboard">
                    <div class="payment-container careerfy-employee-box-section">
                        <div id="payments">
                            <div class="form-group">
                                <label class="col-md-12 ">Select Payment Option</label>
                                @foreach($payments as $payment)
                                <p class="payments"><input type="radio" class="options" name="payment" value="{{$payment->id}}"> {{$payment->title}}</p>
                                @endforeach
                            </div>
                            <button type="button" id="payment" class="btn sendbtn bluebg">Next <i class="fab fa-telegram"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $('#payment').click(function(){
            var id = $('input[type="radio"]:checked').val();
            var token = $('input[name=\'_token\']').val();
            if (id) {
                $.ajax({
                    type: 'POST',
                    url: '{{url("/employee/checkout/payment")}}',
                    data: 'id='+id+'&_token='+token,
                    cache: false,
                    success: function(html){
                        $('#payments').html(html);
                    }
                });
            } else{
                alert('Payment Option not seleted.');
            }
        })
    </script>
@endsection