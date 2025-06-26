'use client';

import { useState } from 'react';
import { Home, Menu, Plus, LogOut } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'fixed top-4 z-50 transition-all',
          open ? 'left-66' : 'left-6'
        )}
      >
        <Menu className="h-6 w-6 text-white bg-gray-900 rounded p-1 shadow" />
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-4 transition-transform duration-300 ease-in-out shadow-lg z-40',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <nav className="flex flex-col gap-2">
          <Link href="/events">
            <Button variant="ghost" className="w-full justify-start text-white">
              <Home className="mr-2 h-4 w-4" /> Events
            </Button>
          </Link>
          <Link href="/events/create">
            <Button variant="ghost" className="w-full justify-start text-white">
              <Plus className="mr-2 h-4 w-4" /> Create Event
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full justify-start mt-auto text-red-500"
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </nav>
      </aside>
    </>
  );
}
