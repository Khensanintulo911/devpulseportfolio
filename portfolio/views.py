from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .models import Profile, Project, ContactMessage
from .forms import ContactForm, ProfileForm


def home(request):
    """Home page view"""
    # Get or create profile
    profile = Profile.objects.first()
    if not profile:
        profile = Profile.objects.create(
            name="Khensani Daniel Ntulo",
            bio="I'm the founder of Dev Pulse - a technology brand focused on building innovative solutions that bridge engineering and software development. My journey from Mining Engineering at Wits University to full-stack development represents the evolution of traditional engineering into the digital age. Currently completing the HyperionDev Graduate Program and actively seeking opportunities to apply my skills in real-world projects.",
            location="Gauteng, Alberton 1458"
        )
    
    # Get projects
    projects = Project.objects.all()[:3]  # Get first 3 projects
    
    # Create projects if they don't exist
    if not projects.exists():
        Project.objects.bulk_create([
            Project(
                title="VoteSphere SA",
                description="A comprehensive political engagement platform that allows users to dive deep into South African politics and parties. Users can explore party platforms, understand political positions, and participate in the democratic process through secure voting mechanisms and political insights.",
                image_url="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
                category="Civic Tech",
                github_url="https://github.com/Khensanintulo911/votesphereSA",
                technologies="Django, HTML, CSS, JavaScript, SQL"
            ),
            Project(
                title="Stockify SA",
                description="A robust inventory management system specifically designed for South African businesses. Features real-time stock tracking, automated low-stock alerts, comprehensive analytics, and business intelligence dashboards for efficient operations and data-driven decision making.",
                image_url="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
                category="Business Solutions",
                github_url="https://github.com/Khensanintulo911/stockifysa",
                technologies="Django, HTML, CSS, JavaScript, SQL"
            ),
            Project(
                title="Klasora",
                description="An innovative academic platform that connects teachers and students in a comprehensive learning environment. Features include grade selection, subject management, dynamic content generation, interactive quizzes, tests, and detailed progress tracking for both educators and learners.",
                image_url="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
                category="EdTech",
                github_url="https://github.com/Khensanintulo911/Klasora",
                technologies="Django, HTML, CSS, JavaScript, SQL"
            )
        ])
        projects = Project.objects.all()[:3]
    
    context = {
        'profile': profile,
        'projects': projects,
        'contact_form': ContactForm()
    }
    return render(request, 'portfolio/home.html', context)


@csrf_exempt
@require_http_methods(["POST"])
def contact_submit(request):
    """Handle contact form submission"""
    form = ContactForm(request.POST)
    if form.is_valid():
        form.save()
        return JsonResponse({'success': True, 'message': 'Message sent successfully!'})
    else:
        return JsonResponse({'success': False, 'errors': form.errors})


@csrf_exempt
@require_http_methods(["GET", "POST"])
def update_profile(request):
    """Handle profile updates"""
    profile = get_object_or_404(Profile, pk=1)
    
    if request.method == 'POST':
        form = ProfileForm(request.POST, instance=profile)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True, 'message': 'Profile updated successfully!'})
        else:
            return JsonResponse({'success': False, 'errors': form.errors})
    
    # GET request - return profile data
    data = {
        'name': profile.name,
        'bio': profile.bio,
        'location': profile.location or '',
        'linkedin_url': profile.linkedin_url or '',
        'whatsapp_number': profile.whatsapp_number or '',
        'phone_number': profile.phone_number or ''
    }
    return JsonResponse(data)
