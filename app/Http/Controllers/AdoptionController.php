<?php

namespace App\Http\Controllers;

use App\Models\Adoption;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AdoptionController extends Controller
{
    public function index() {
        // --- ANG PAG-AAYOS AY DITO ---
       $adoption = Adoption::orderBy('created_at', 'desc')->get(); // Pinalitan ang paginate(10) ng get()

        // Kailangan nating balutin ang result sa 'data' array
        // para tugma pa rin sa structure na inaasahan ng iyong React frontend (adoption.data.map)
        $dataForFrontend = [
            'data' => $adoption,
        ];

        return Inertia::render('Adoption/Index', [
            'adoption' => $dataForFrontend, // Ipinasa ang binalot na data
            'flash' => session('success'),
        ]);

    }

    public function store(Request $request) {
        // ... (Walang pagbabago sa store method mo)

        $request->validate([
            'pname' => 'required|string|max:20',
            'gender' => 'required|in:female,male',
            'age' => 'required|numeric|between:1,25',
            'color' => 'required|string|max:40',
            'location' => 'required|string|max:100',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,bmp|max:2048',
        ]);

        // **Tandaan**: Kailangan mong i-handle ang pag-upload ng image file at i-save ang path nito sa database.
        // Ang iyong current store logic ay hindi pa nagse-save ng image file.

        $adoption = new Adoption();
        $adoption->pname = $request->pname;
        $adoption->gender = $request->gender;
        $adoption->age = $request->age;
        // $adoption->age_unit = $request->age_unit;
        $adoption->color = $request->color;
        $adoption->location = $request->location;
        $adoption->description = $request->description;

        // 🛑 ANG CRITICAL FIX: Tamang Disk at Path
        if ($request->hasFile('image')) {
            // Nag-i-store sa 'pets' folder, gamit ang 'public' disk.
            // Resulta: storage/app/public/pets/filename.jpg
            $imagePath = $request->file('image')->store('pets', 'public');

            // Tanging ang 'pets/filename.jpg' lang ang ise-save sa database.
            $adoption->image = $imagePath;
        }

        $adoption->save();

        return redirect()->route('adoption.index');
    }

    public function show($pname) {

        $adoption = Adoption::where('pname', $pname)->firstOrFail();
        return Inertia::render('Adoption/Show', ['pet' => $adoption->load('user')]);
    }


}
