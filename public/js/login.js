document.getElementById('close').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Add this script to your login.html
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Set authentication state to true
            localStorage.setItem('isAuthenticated', 'true');
            console.log('Login successful, auth state set to true');
            window.location.href = '/'; // Redirect to home page
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Login failed');
    }
});