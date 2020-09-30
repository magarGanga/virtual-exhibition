<?php

namespace App\Http\Controllers\admin\module;
use DB;
use App\Http\Controllers\Controller;
use App\Imagetool;
use App\Module;




class EventController extends Controller
{
     


    public function index()
    {
       
       
        return view('admin.module.event.newform');

    }

    public function edit($id)
    {
        
       
       $module = Module::where('id', $id)->first();
       $datas['module_title'] = $module->title;
       $datas['module_page'] = $module->module_page;
       $datas['setting'] = json_decode($module->setting);
      
       $datas['id'] = $id;
      
        return view('admin.module.event.editform')->with('data', $datas);

    }

     
     
  
   

}
