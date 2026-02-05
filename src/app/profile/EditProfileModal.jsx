"use client";
import { useState, useEffect } from "react";

export default function EditProfileModal({
  open,
  setOpen,
  data,
  setData,
}) {
  const [form, setForm] = useState(data);

  useEffect(() => {
    setForm(data);
  }, [data]);

  if (!open) return null;

  const handleSave = () => {
    setData(form);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold">Edit Profile</h2>

        <div className="space-y-3">
          <input
            className="w-full rounded border p-2"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            placeholder="Name"
          />

          <input
            className="w-full rounded border p-2"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            placeholder="Email"
          />

          <input
            className="w-full rounded border p-2"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            placeholder="Phone"
          />

          <input
            className="w-full rounded border p-2"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
            placeholder="Location"
          />
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => setOpen(false)}
            className="w-full rounded bg-gray-200 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="w-full rounded bg-blue-600 py-2 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
