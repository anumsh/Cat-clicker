var model = {
        init: function()
        {
            if (!localStorage.notes)
            {
                localStorage.notes = JSON.stringify([]);
                console.log(localStorage.notes);
            }
        },
        add: function(obj)
        {
            var data = JSON.parse(localStorage.notes);
            console.log(data);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
            console.log(localStorage.notes);
        },

        getAllNotes: function()
        {
            return JSON.parse(localStorage.notes);
        }
    };

var octopus = {
        addNewNote: function(noteStr)
        {
            model.add({
                content: noteStr,
                dateSubmitted: Date.now()
            });
            view.render();
        },

        getNotes: function()
        {
            return model.getAllNotes();
        },

        init: function()
        {
            model.init();
            view.init();
        }
    };

var view = {
        init: function()
        {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function()
        {
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content + '<span class="note-date">' + new Date(note.dateSubmitted).toString() + '</span>' +
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

octopus.init();