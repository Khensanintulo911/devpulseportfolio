from django import forms
from .models import Profile, ContactMessage


class ContactForm(forms.ModelForm):
    """Contact form"""
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 outline-none transition-colors',
                'placeholder': 'Your Name'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 outline-none transition-colors',
                'placeholder': 'Your Email'
            }),
            'subject': forms.TextInput(attrs={
                'class': 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 outline-none transition-colors',
                'placeholder': 'Subject'
            }),
            'message': forms.Textarea(attrs={
                'class': 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 outline-none transition-colors resize-none',
                'rows': 5,
                'placeholder': 'Your Message'
            })
        }


class ProfileForm(forms.ModelForm):
    """Profile update form"""
    class Meta:
        model = Profile
        fields = ['name', 'bio', 'location', 'linkedin_url', 'whatsapp_number', 'phone_number']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 outline-none transition-colors',
                'placeholder': 'Your full name'
            }),
            'bio': forms.Textarea(attrs={
                'class': 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 outline-none transition-colors resize-none',
                'rows': 4,
                'placeholder': 'Tell us about yourself'
            }),
            'location': forms.TextInput(attrs={
                'class': 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 outline-none transition-colors',
                'placeholder': 'City, Province, Postal Code'
            }),
            'linkedin_url': forms.URLInput(attrs={
                'class': 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 outline-none transition-colors',
                'placeholder': 'https://linkedin.com/in/...'
            }),
            'whatsapp_number': forms.TextInput(attrs={
                'class': 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 outline-none transition-colors',
                'placeholder': '+27 XX XXX XXXX'
            }),
            'phone_number': forms.TextInput(attrs={
                'class': 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 outline-none transition-colors',
                'placeholder': '+27 XX XXX XXXX'
            })
        }