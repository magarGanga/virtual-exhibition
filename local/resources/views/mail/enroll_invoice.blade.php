<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Invoice</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    </head>
    <body>
        <section class="wrapper" style="width:900px; background-color: #fefefe; border:1px solid #f3f3f3; padding:10px; float:left;">
            <div style="border-bottom: 2px solid #f3f3f3; padding-bottom: 5px; margin-bottom: 30px;">
                <img src="{{asset('image/'.$data['logo'])}}" style="width: 200px;">
                <div style="float: right;color: #666;
                    display: block;
                    margin-top: 5px;
                    font-size:16px;">
                    <div style="color: #000; font-weight: bold;">Invoice No. :#{{$data['invoice_detail']->invoice_no}}</div>
                    <div>Date: {{$data['invoice_detail']->created_at}}</div>
                </div>
            </div>
            <div style="margin-bottom: 10px; width: 100%; float: left;">
                <div style="float: left;  padding-bottom: 10px;">
                    From
                    <div>
                        <strong style="color: #008bb5;">{{$data['from_name']}}</strong><br>
                        {{$data['store_address']}}<br>
                        Phone: {{$data['store_phone']}}<br>
                        Email: {{$data['from_email']}}
                    </div>
                </div>
                <div style="float: right;  right:0px; padding:0px;">
                    Bill To
                    <div>
                        <strong>{{$data['invoice_detail']->company_name}}</strong><br>

                        Email: {{$data['invoice_detail']->email}}
                    </div>
                </div>
            </div>
            <div style="width: 100%; float: left; margin-top: 30px; border:1px solid #f3f3f3;">
                <table style="width: 100%;">
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
                           
                        @php($i = 1)
                            @foreach($data['invoice_detail']->enrollinvoiceItem as $item)
                            <tr>
                                <td style="padding:5px;">{{$i++}}</td>
                                <td style="padding:5px;">{{ $item->type }}</td>
                                <td style="padding:5px;">{{ $item->category }}</td>
                                <td style="padding:5px;">{{ $item->booth_name }}</td>
                                <td style="padding:5px;">{{ $item->booth_type }}</td>
                                <td style="padding:5px;">Rs. {{ $item->amount }} </td>
                            </tr>
                            @endforeach

                            <tr style="font-weight: bold;">
                                <td colspan="5" style="text-align: right; padding-right: 10px; font-weight: 700">Total Amount</td>
                                <td><strong>Rs. {{$data['invoice_detail']->amount}}</strong></td>
                            </tr>

                    </tbody>
                </table>
            </div>
            <div>
                <strong style="padding-bottom: 15px;">{{$data['from_name']}}</strong><br>
                Sales Division
            </div>
        </section>
    </body>
</html>
