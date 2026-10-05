import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, Copy, Maximize, Minimize, Check } from 'lucide-react';

const ContextMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const menuRef = useRef(null);

  // Monitor fullscreen state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Handle right-click context menu
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();

      const menuWidth = 200;
      const menuHeight = 140;

      let x = e.clientX;
      let y = e.clientY;

      if (x + menuWidth > window.innerWidth) {
        x = Math.max(10, window.innerWidth - menuWidth - 10);
      }
      if (y + menuHeight > window.innerHeight) {
        y = Math.max(10, window.innerHeight - menuHeight - 10);
      }

      setPosition({ x, y });
      setIsOpen(true);
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      } else {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleReload = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    window.location.reload();
  };

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      const selectedText = window.getSelection()?.toString();
      const textToCopy = selectedText && selectedText.trim().length > 0 ? selectedText : window.location.href;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 600);
    } catch (err) {
      setIsOpen(false);
    }
  };

  const handleToggleFullscreen = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
          className="custom-context-menu"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="context-menu-item"
            onClick={handleReload}
          >
            <div className="item-left">
              <RotateCw size={15} className="menu-item-icon" />
              <span>Reload</span>
            </div>
            <span className="item-shortcut">Ctrl+R</span>
          </button>

          <button
            type="button"
            className="context-menu-item"
            onClick={handleCopy}
          >
            <div className="item-left">
              {copied ? (
                <Check size={15} className="menu-item-icon" style={{ color: 'var(--accent-main)' }} />
              ) : (
                <Copy size={15} className="menu-item-icon" />
              )}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </div>
            <span className="item-shortcut">Ctrl+C</span>
          </button>

          <button
            type="button"
            className="context-menu-item"
            onClick={handleToggleFullscreen}
          >
            <div className="item-left">
              {isFullscreen ? (
                <Minimize size={15} className="menu-item-icon" />
              ) : (
                <Maximize size={15} className="menu-item-icon" />
              )}
              <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </div>
            <span className="item-shortcut">F11</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContextMenu;
