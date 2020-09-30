@extends('employer_master')
@section('content')
<script src="{{asset('assets/plugins/jQuery/jQuery-2.1.4.min.js')}}"></script>
<script src="{{asset('assets/ckeditor/ckeditor.js')}}"></script>
<link rel="stylesheet" href="{{asset('assets/dist/css/jquery-ui.css')}}">
<link rel="stylesheet" type="text/css" href="{{asset('assets/plugins/timepicker/bootstrap-timepicker.min.css')}}" />
<link rel="stylesheet" type="text/css" href="{{asset('assets/bootstrap/css/glyphicon.css')}}" />
<script src="{{asset('assets/dist/js/jquery-ui.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/plugins/timepicker/bootstrap-timepicker.min.js')}}"></script>
      <h3 class="form_heading">New Training</h3>
        <div class="form_tabbar">
          @if(count($errors))
          <div class="row">
            <div class="col-xs-12">
              <div class="alert alert-danger">
                @foreach($errors->all() as $error)
                {{ '* : '.$error }}</br>
                @endforeach
              </div>
            </div>
          </div>
          @endif
        
        <form class="dash_forms" enctype="multipart/form-data" role="form" id="testform" method="POST" action="{{ url('/employer/training/save') }}">
          {!! csrf_field() !!}
          <div class="form-group row ">
            <div class="col-md-6 {{ $errors->has('training_category') ? ' has-error' : '' }}">
                  <label class="required">Training Category</label>
                 <select class="form-control" name="training_category">
                   @foreach($datas['category'] as $category)
                   @if($category->id == old('training_category'))
                   <option selected="selected" value="{{$category->id}}">{{$category->title}}</option>
                   @else
                   <option value="{{$category->id}}">{{$category->title}}</option>
                   @endif
                   @endforeach
                 </select>
                  @if ($errors->has('training_category'))
                      <span class="help-block">
                          <strong>{{ $errors->first('training_category') }}</strong>
                      </span>
                  @endif
                </div>
            <div class="col-md-6 {{ $errors->has('title') ? ' has-error' : '' }}">
              <label class="required">Title</label>
              <input type="text" id="title"  name="title" class="form-control" value="{{ old('title') }}">
              @if ($errors->has('title'))
                  <span class="help-block">
                      <strong>{{ $errors->first('title') }}</strong>
                  </span>
              @endif
            </div>

           
          </div>
          <div class="form-group row">
            <div class="col-md-6 {{ $errors->has('seo_url') ? ' has-error' : '' }}">
              <label class="required">Seo Url</label>
              <input type="text" id="seo_url" name="seo_url" class="form-control"  value="{{old('seo_url')}}">
                @if ($errors->has('seo_url'))
                  <span class="help-block">
                    <strong>{{ $errors->first('seo_url') }}</strong>
                  </span>
                @endif
            </div>
            <div class="col-md-6 {{ $errors->has('meta_title') ? ' has-error' : '' }}">
              <label class="required">Meta Title</label>
              <input type="text"  id="meta_title" name="meta_title" class="form-control" value="{{ old('meta_title') }}">
              @if ($errors->has('meta_title'))
                  <span class="help-block">
                      <strong>{{ $errors->first('meta_title') }}</strong>
                  </span>
              @endif
            </div>
          </div>
           <div class="form-group row ">
            
            <div class="col-md-6 {{ $errors->has('meta_keyword') ? ' has-error' : '' }}">
              <label class="">Meta Keyword</label>
              <input type="text"  id="meta_keyword" name="meta_keyword" class="form-control" value="{{ old('meta_keyword') }}">
              @if ($errors->has('meta_keyword'))
              <span class="help-block">
                  <strong>{{ $errors->first('meta_keyword') }}</strong>
              </span>
              @endif
            </div>
            <div class="col-md-6">
              <label class="">Meta Description</label>
              <textarea class="form-control" name="meta_description">{{ old('meta_description') }}</textarea>
            </div>
          </div>
          
          <div class="form-group row ">
            <div class="col-md-6 {{ $errors->has('latitude') ? ' has-error' : '' }}">
              <label class="required">Latitude</label>
              <input type="text" id="latitude" name="latitude" class="form-control"  value="{{old('latitude')}}">
                @if ($errors->has('latitude'))
                  <span class="help-block">
                    <strong>{{ $errors->first('latitude') }}</strong>
                  </span>
                @endif
            </div>
             <div class="col-md-6 {{ $errors->has('longitude') ? ' has-error' : '' }}">
              <label class="required">Longitude</label>
              <input type="text" id="longitude" name="longitude" class="form-control"  value="{{old('longitude')}}">
                @if ($errors->has('longitude'))
                  <span class="help-block">
                    <strong>{{ $errors->first('longitude') }}</strong>
                  </span>
                @endif
            </div>
            <div class="center tp10p"><p>Please Visit the link : <a href="https://www.latlong.net/" target="_blank" class="greenclr">Click Here</a> to get latitude and longitude</p></div>
          </div>
          <div class="form-group row ">
             <div class="col-md-6 {{ $errors->has('venue') ? ' has-error' : '' }}">
              <label class="required">Venue</label>
              <input type="text" id="venue"  name="venue" class="form-control" value="{{ old('venue') }}">
              @if ($errors->has('venue'))
                <span class="help-block">
                    <strong>{{ $errors->first('venue') }}</strong>
                </span>
              @endif
            </div>
            <div class="col-md-6 {{ $errors->has('address') ? ' has-error' : '' }}">
              <label class="required">Address</label>
              <input type="text" id="address" name="address" class="form-control"  value="{{old('address')}}">
              @if ($errors->has('address'))
                  <span class="help-block">
                      <strong>{{ $errors->first('address') }}</strong>
                  </span>
              @endif
            </div>
            
          </div>

          <div class="form-group row ">
            <div class="col-md-6 {{ $errors->has('start_date') ? ' has-error' : '' }}">
              <label class="required"> Opening Date</label>
              <input type="text"  id="start_date" name="start_date" class="form-control datepicker" value="{{ old('start_date') }}">
                  @if ($errors->has('start_date'))
                      <span class="help-block">
                          <strong>{{ $errors->first('start_date') }}</strong>
                      </span>
                  @endif
            </div>

            <div class="col-md-6 {{ $errors->has('start_time') ? ' has-error' : '' }}">
              <label class="required">Start Time</label>
              <input type="text" id="start_time"  name="start_time" class="form-control timepicker" value="{{ old('start_time') }}">
              @if ($errors->has('start_time'))
                  <span class="help-block">
                      <strong>{{ $errors->first('start_time') }}</strong>
                  </span>
              @endif
            </div>
            
          </div>
          <div class="form-group row ">
            
            <div class="col-md-6 {{ $errors->has('end_date') ? ' has-error' : '' }}">
              <label class="required">Closing Date</label>
              <input type="text"  id="end_date" name="end_date" class="form-control datepicker" value="{{ old('end_date') }}">
                  @if ($errors->has('end_date'))
                      <span class="help-block">
                          <strong>{{ $errors->first('end_date') }}</strong>
                      </span>
                  @endif
            </div>
            <div class="col-md-6 {{ $errors->has('end_time') ? ' has-error' : '' }}">
              <label class="required">End Time</label>
              <input type="text" id="end_time"  name="end_time" class="form-control timepicker" value="{{ old('end_time') }}">
              @if ($errors->has('end_time'))
                <span class="help-block">
                    <strong>{{ $errors->first('end_time') }}</strong>
                </span>
              @endif
            </div>
          </div>
           <div class="form-group row">
            <div class="col-md-6 {{ $errors->has('price') ? ' has-error' : '' }}">
              <label class="required">Price</label>
              <input type="text" id="address" name="price" class="form-control"  value="{{old('price')}}">
              @if ($errors->has('price'))
                <span class="help-block">
                    <strong>{{ $errors->first('price') }}</strong>
                </span>
              @endif
            </div>
            <div class="col-md-6 {{ $errors->has('image') ? ' has-error' : '' }}">
              <label class="required">Training Image</label>
              <a href="" id="training-image" data-toggle="image" class="img-thumbnail">
                <img src="{{ asset($datas["placeholder"]) }}" alt="" title="" data-placeholder="{{ asset($datas["placeholder"]) }}" /></a>
              <input type="hidden" name="image" value="{{ old('image') }}" id="input-thumb" />

              @if ($errors->has('image'))
                  <span class="help-block">
                      <strong>{{ $errors->first('image') }}</strong>
                  </span>
              @endif
            </div>
            
          </div>
          <div class="form-group row ">
            <div class="col-md-6">
                  <label>Status </label>
                    <select name="status" class="form-control">
                      @foreach($datas['status'] as $status)
                      @if(old('status') == $status['value'])
                      <option value="{{$status['value']}}" selected="selected">{{$status['title']}}</option>
                      
                      @else
                      <option value="{{$status['value']}}" >{{$status['title']}}</option>
                      
                      @endif
                      @endforeach
                    </select>
                </div>
            
          </div>
          <div class="form-group row ">
            <div class="col-md-12 ">
              <label class="">Training Description</label>
              <textarea id="description" name="description">{{old('description')}}</textarea>
              <script>
                CKEDITOR.replace('description',
                  {
                  filebrowserBrowseUrl : '{{ url("assets/ckfinder/ckfinder.html")}}',
                  filebrowserImageBrowseUrl : '{{ url("assets/ckfinder/ckfinder.html?type=Images")}}',
                  filebrowserFlashBrowseUrl : '{{ url("assets/ckfinder/ckfinder.html?type=Flash")}}',
                  filebrowserUploadUrl : 
                  '{{ url("assets/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files")}}',
                  filebrowserImageUploadUrl : 
                  '{{ url("assets/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images")}}',
                  filebrowserFlashUploadUrl : '{{ url("assets/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash")}}',
                  enterMode: CKEDITOR.ENTER_BR
                  } 
                );
              </script>
            </div>
          </div>
         
          <div class="form-group row">
            <div class="col-md-12">
              <button type="submit" class="btn sendbtn bluebg">Submit <i class="fab fa-telegram"></i></button>
            </div>
          </div>
        </form>
    </div>    
<script type="text/javascript">
    $('#title').blur(function(){
        var data = $(this).val();
       
        var fleter = data.match(/\b\w/g).join('');

        var se_url = data.replace(/ /g,"-");
       
        $('#seo_url').val(se_url);
        $('#meta_title').val(data);
    });
</script>
<script type="text/javascript">
$.fn.tabs = function() {
  var selector = this;
  
  this.each(function() {
    var obj = $(this); 
    
    $(obj.attr('href')).hide();
    
    $(obj).click(function() {
      $(selector).removeClass('selected');
      
      $(selector).each(function(i, element) {
        $($(element).attr('href')).hide();
      });
      
      $(this).addClass('selected');
      
      $($(this).attr('href')).show();
      
      return false;
    });
  });

  $(this).show();
  
  $(this).first().click();
};
</script>



<script type="text/javascript">
$(document).delegate('button[data-toggle=\'image\']', 'click', function() {
    $('#modal-image').remove();

    $(this).parents('.note-editor').find('.note-editable').focus();

    $.ajax({
      url: '{{ url("/employer/filemanager") }}',
      dataType: 'html',
      beforeSend: function() {
        $('#button-image i').replaceWith('<i class="fa fa-circle-o-notch fa-spin"></i>');
        $('#button-image').prop('disabled', true);
      },
      complete: function() {
        $('#button-image i').replaceWith('<i class="fa fa-upload"></i>');
        $('#button-image').prop('disabled', false);
      },
      success: function(html) {
        $('body').append('<div id="modal-image" class="modal">' + html + '</div>');

        $('#modal-image').modal('show');
      }
    });
  });
  // Image Manager
  $(document).delegate('a[data-toggle=\'image\']', 'click', function(e) {
    e.preventDefault();

    $('.popover').popover('hide', function() {
      $('.popover').remove();
    });

    var element = this;

    $(element).popover({
      html: true,
      placement: 'right',
      trigger: 'manual',
      content: function() {
        return '<button type="button" id="button-image" class="btn sendbtn greenbg"><i class="fas fa-pencil-alt"></i></button> <button type="button" id="button-clear" class="btn sendbtn greenbg"><i class="far fa-trash-alt"></i></button>';
      }
    });

    $(element).popover('show');

    $('#button-image').on('click', function() {
      $('#modal-image').remove();

      $.ajax({
        url: '{{ url("/employer/filemanager") }}' + '?target=' + $(element).parent().find('input').attr('id') + '&thumb=' + $(element).attr('id'),
        dataType: 'html',
        beforeSend: function() {
          $('#button-image i').replaceWith('<i class="fa fa-circle-o-notch fa-spin"></i>');
          $('#button-image').prop('disabled', true);
        },
        complete: function() {
          $('#button-image i').replaceWith('<i class="fa fa-pencil"></i>');
          $('#button-image').prop('disabled', false);
        },
        success: function(html) {
          $('body').append('<div id="modal-image" class="modal" style="display: block; padding-right: 17px;" >' + html + '</div>');

          $('#modal-image').modal('show');
        }
      });

      $(element).popover('hide', function() {
        $('.popover').remove();
      });
    });

    $('#button-clear').on('click', function() {
      $(element).find('img').attr('src', $(element).find('img').attr('data-placeholder'));

      $(element).parent().find('input').attr('value', '');

      $(element).popover('hide', function() {
        $('.popover').remove();
      });
    });
  });

</script>
<script type="text/javascript">
  $(function(){
    $('.timepicker').timepicker({
      showMeridian:false,
    });
  });
</script>

@endsection