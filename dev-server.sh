#!/bin/bash

# Development Server Script
# Provides multiple options for local development with auto-reload

echo "🚀 Professional Website Development Server"
echo "=========================================="
echo ""

# Check if Node.js is available
if command -v node &> /dev/null; then
    NODE_AVAILABLE=true
else
    NODE_AVAILABLE=false
fi

# Check if Python is available
if command -v python3 &> /dev/null; then
    PYTHON_AVAILABLE=true
else
    PYTHON_AVAILABLE=false
fi

echo "Available development server options:"
echo ""

if [ "$NODE_AVAILABLE" = true ]; then
    echo "1. HTTP Server (Recommended - Compatible with older Node.js)"
    echo "   Command: npm run dev-reload"
    echo "   Features: Simple static server, opens browser automatically"
    echo ""
    
    echo "2. Browser Sync (Auto-reload enabled)"
    echo "   Command: npm run dev-browser-sync"
    echo "   Features: Auto-reload on file changes, live CSS injection"
    echo ""
    
    echo "3. Serve (Simple static server)"
    echo "   Command: npm run dev-serve"
    echo "   Features: Fast, simple static file serving"
    echo ""
fi

if [ "$PYTHON_AVAILABLE" = true ]; then
    echo "4. Python HTTP Server (Basic)"
    echo "   Command: python3 -m http.server 8000"
    echo "   Features: No auto-reload, manual refresh required"
    echo ""
fi

echo "Choose an option:"
echo ""

if [ "$NODE_AVAILABLE" = true ]; then
    echo "a) Start HTTP Server (compatible) - RECOMMENDED"
    echo "b) Start Browser Sync (auto-reload)"
    echo "c) Start Serve (simple)"
fi

if [ "$PYTHON_AVAILABLE" = true ]; then
    echo "d) Start Python server (basic)"
fi

echo "q) Quit"
echo ""

read -p "Enter your choice: " choice

case $choice in
    a|A)
        if [ "$NODE_AVAILABLE" = true ]; then
            echo "Starting HTTP Server..."
            echo "The site will open automatically at http://localhost:8000"
            echo "Press Ctrl+C to stop the server"
            echo "Note: No auto-reload - you'll need to refresh manually"
            echo ""
            npm run dev-reload
        else
            echo "❌ Node.js not available. Please install Node.js to use HTTP Server."
        fi
        ;;
    b|B)
        if [ "$NODE_AVAILABLE" = true ]; then
            echo "Starting Browser Sync with auto-reload..."
            echo "The site will open automatically at http://localhost:8000"
            echo "Press Ctrl+C to stop the server"
            echo ""
            npm run dev-browser-sync
        else
            echo "❌ Node.js not available. Please install Node.js to use Browser Sync."
        fi
        ;;
    c|C)
        if [ "$NODE_AVAILABLE" = true ]; then
            echo "Starting Serve..."
            echo "Open http://localhost:8000 in your browser"
            echo "Press Ctrl+C to stop the server"
            echo ""
            npm run dev-serve
        else
            echo "❌ Node.js not available. Please install Node.js to use Serve."
        fi
        ;;
    d|D)
        if [ "$PYTHON_AVAILABLE" = true ]; then
            echo "Starting Python HTTP Server..."
            echo "Open http://localhost:8000 in your browser"
            echo "Press Ctrl+C to stop the server"
            echo "Note: No auto-reload - you'll need to refresh manually"
            echo ""
            python3 -m http.server 8000
        else
            echo "❌ Python3 not available."
        fi
        ;;
    q|Q)
        echo "Goodbye!"
        exit 0
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        exit 1
        ;;
esac
