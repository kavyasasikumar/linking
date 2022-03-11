export let data = {studentName: "", email: "", mark: "" };
export function onChange(e) {
  data = { ...data, [e.target.name]: e.target.value };
}

export function delete1(id) {
   data.filter((val, i) => {
    return i !== id;
  });
}
